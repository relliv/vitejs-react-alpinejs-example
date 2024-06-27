import { useState } from 'react';
import reactLogo from './assets/react.svg';
import alpinejsLogo from './assets/alpinejs.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div x-data="appData">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://alpinejs.dev/" target="_blank">
          <img src={alpinejsLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React + AlpineJS</h1>

      <div className="card">
        {/* React Example */}
        <button onClick={() => setCount((count) => count + 1)}>
          react count is {count}
        </button>

        {/* AlpineJS Example */}
        <button
          x-text="'alpinejs count is ' + count"
          x-on:click="increaseCount()"
        >
          {/* Alpinejs Counter */}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
