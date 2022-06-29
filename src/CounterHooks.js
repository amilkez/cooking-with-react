import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

function CounterHooks({ initialCount }) {
  // It lets us add local state to React function components

  //What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}

export default CounterHooks;
