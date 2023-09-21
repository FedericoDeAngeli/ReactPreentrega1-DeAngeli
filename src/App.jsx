import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import CartProvider from "./components/CartProvider";


function App() {
 return(
<CartProvider>
  <NavBar />

    <Routes>
    <Route path="/" element={<ItemListContainer />}></Route>
    <Route path="/category/:categoryId" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="/checkout" element={<Checkout/>} />

   </Routes>


   </CartProvider>
 )
}

export default App
