import Header from "./components/Header";
import Home from "./components/Home";
import {   Routes,  Route} from "react-router-dom"
import Cart from "./components/Cart";

function App() {
  return (
   <>
    <Header/>
   <Routes>
    
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/cart" element={<Cart/>}/>

   </Routes>
   </>
  );
}

export default App;
