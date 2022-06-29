import React, { useState } from 'react';
import CounterHooks from './CounterHooks';
// import Counter from './Counter';
// provider and a consumer
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('green');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === 'red' ? 'blue' : 'red';
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
