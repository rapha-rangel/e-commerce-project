import {Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Products from "../pages/Products";
import Product from "../pages/Product";
import ShoppingCart from "../pages/ShoppingCart";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/main" Component={Main} />
      <Route path="/category/:category" Component={Products} />
      <Route path="/category/:category/id/:id" Component={Product} />
      <Route path="/user/" Component={ShoppingCart} />
    </Routes>
  );
};

export default Routers;