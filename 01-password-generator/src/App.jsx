import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  );
}

export default App;
