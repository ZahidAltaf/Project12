import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About'
import Register from './Pages/Login/Register';
import Products from './Pages/Products/Products'
import ProductDetailPage from "./Pages/Products/ProductDetailPage"
import TableList from './Pages/Table/TableList';
import { ApiDataProvider } from "./Context/Context";
import Tree from './Pages/FamilyTree/Tree';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <ApiDataProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/tree" element={<Tree />} />
            <Route exact path="/tablelist" element={<TableList />} />
            <Route
              exact
              path="/productdetailpage/:id"
              element={<ProductDetailPage />}
            />
          </Routes>
        </ApiDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
