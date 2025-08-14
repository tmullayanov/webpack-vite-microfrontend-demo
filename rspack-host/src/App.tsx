import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BridgeBtn } from './Bridged-Btn';
import { ExtButton } from './ExternalBtn';


const useBridge = true;

function App() {
  const [count, setCount] = useState(0);

  console.log(BridgeBtn);

  return (
    <div className="App">
      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        {
          // @ts-ignore
          <BridgeBtn  callback={() => console.log("HELLO")}/>
          // <ExtButton />
        }
        <hr />
        {/* <ExtButton /> cause invalid hook call */}
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
