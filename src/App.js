import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import HeartProduct from "./pages/HeartProduct";
import Login from "./components/Login";
import CreateProduct from "./components/CreateProduct";
import Footer from "./components/Footer";
import Register from "./components/Register";


function App() {
  return (
    <div className="w-full h-full animation">
      <Header />

      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/heart" element={<HeartProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
