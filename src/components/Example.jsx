import { useState } from "react";
const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          Vite
        </a>
        <a href="https://react.dev" target="_blank">
          React
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default Example;
