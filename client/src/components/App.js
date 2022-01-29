//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from "react-router";
import About from "./about";

function App() {
  return (
    <div >
     <Routes>
       
       <Route path = "/about" element = {<About/>}/>
       
         
     </Routes>
    </div>
  );
}

export default App;
