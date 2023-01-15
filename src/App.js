import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllGun from './components/AllGun/AllGun';
import { useState } from "react";

function App() {
  

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun handleCount={handleCount}></AllGun>
    </div>
  );
}

export default App;
