import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../components/Home";
import App from "../components/App";
import Addcategory from "../components/Addcategory";
import Addbrand from "../components/Addbrand";
import Addproduct from "../components/Addproduct";
import Cart from "../components/Cart";
import Pagenotfound from "../components/Pagenotfound";
import Login from "../components/Login";
import Register from "../components/Register";

let ecomStore = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="add-category" element={<Addcategory/>}/>
        <Route path="add-brand" element={<Addbrand/>}/>
        <Route path="add-product" element={<Addproduct/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />

        <Route path="*" element={<Pagenotfound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default ecomStore