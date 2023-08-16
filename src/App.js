import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About'
import Register from './Pages/Login/Register';
import Products from './Pages/Products/Products'
import ProductDetailPage from "./Pages/Products/ProductDetailPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productdetailpage/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
