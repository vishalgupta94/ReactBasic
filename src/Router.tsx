import { RouterProvider, createBrowserRouter, Outlet, Link, useNavigation, useParams, useLoaderData } from 'react-router-dom';
import axios from 'axios'

const RootLayout = function () {
    return <>
        <MainNavigation />
        <Outlet />
    </>
}

const MainNavigation = function () {
    return <header>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
        </ul>
    </header>
}

const Home = function () {
    return <div>Home Page</div>
}

interface IData {
    id: number;
    name: string;
  }

const Products: React.FC  = function () {
    const loader = useLoaderData() as { data: IData[] }
    console.log("loader", loader.data);
    return (
        <>
            <h1>The products Page</h1>
            <ul>
                {loader.data.map((product) => {
                    return (<li key={product.id}> <Link to={`/products/${product.name}`}>{product.name}</Link></li>)
                })}
            </ul>
        </>
    )
}


const ProductDetail = function () {
    const paramas = useParams();

    return <div>Products {paramas.productID}</div>
}

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/products', element: <Products />, loader: async () => {
                    const data = await axios.get('http://localhost:4000/');
                    console.log("Data data 1111", data);
                    return await new Promise((res, rej) => {
                        setTimeout(() => {
                            console.log("Data data 2222", data);
                            res(data);
                        }, 3000)
                    })


                }
            },
            { path: '/products/:productID', element: <ProductDetail /> }
        ]
    }
])


const RouterElement = () => {
    return <RouterProvider router={router} />
}
export default RouterElement