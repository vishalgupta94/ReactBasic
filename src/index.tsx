import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = function () {
  const [count, setCount] = useState<number>(0);
  const [valueToAdd, setValueToAdd] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  const handleChange = (event: any) => {
    setValueToAdd(parseInt(event.target.value) || 0)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCount(count + valueToAdd)
    setValueToAdd(0)
  }

  return <div style={{ border: '1px solid black', width: '440px', height: '560px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
    <div style={{ border: '1px solid black', flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ border: '1px solid black', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: '1px solid black' }}>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
      <div style={{ border: '1px solid black', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ border: '1px solid black' }}>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
    <div style={{ border: '1px solid black', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ border: '1px solid black', width: '200px', height: '50px', }}>
        {count}
      </div>
    </div>
    <div style={{ border: '1px solid black', flex: 1, display: 'flex' }}>
      <form onSubmit={handleSubmit} style={{ border: '1px solid black', flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', flex: 1 }}>

        <div style={{ border: '1px solid black', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ border: '1px solid black' }}>
            <button>AddToCount</button>
          </div>
        </div>

        <div style={{ border: '1px solid black', flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input style={{ border: '1px solid black' }} type="number" value={valueToAdd} onChange={handleChange} />
        </div>
      </form>
    </div>
  </div>
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

