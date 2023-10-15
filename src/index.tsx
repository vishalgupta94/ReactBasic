import React from 'react';
import ReactDOM from 'react-dom/client';
import { useReducer } from 'react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let INCREMENT = 'increment'
let DECREMENT = 'decrement'
let VALUETOADD = 'valueToAdd'
let SUBMIT = 'submit'

// type INCREMENT = 'increment'
// type DECREMENT = 'decrement'
// type VALUETOADD = 'valueToAdd'
// type SUBMIT = 'submit'

type Action = {
  type: string,
  payload?: number
}
const reducer = function (state: any, action: Action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count + 1
    }
  }
  else if (action.type === DECREMENT) {
    return {
      ...state,
      count: state.count - 1
    }
  } else if (action.type === VALUETOADD) {
    return {
      ...state,
      valueToAdd: action.payload ?? 0
    }
  } else {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0
    }
  }
}
const App = function () {
  // const [count, setCount] = useState<number>(0);
  // const [valueToAdd, setValueToAdd] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0
  })
  const increment = () => {
    dispatch({
      type: INCREMENT
    })
  }
  const decrement = () => {
    dispatch({
      type: DECREMENT
    })
  }

  const handleChange = (event: any) => {
    let abc = parseInt(event.target.value)
    dispatch({
      type: VALUETOADD,
      payload: abc || 0
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // setCount(count + valueToAdd)
    dispatch({
      type: SUBMIT
    })
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
        {state.count}
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
          <input style={{ border: '1px solid black' }} type="number" value={state.valueToAdd} onChange={handleChange} />
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

