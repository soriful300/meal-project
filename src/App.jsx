import "./App.css";
import ShowCategory from "./Components/Categorey/ShowCategory";
import CategoreyData from "./Components/CategoreyData/CategoreyData";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ShowCategory></ShowCategory>
      <CategoreyData></CategoreyData>
    </>
  );
}

export default App;
