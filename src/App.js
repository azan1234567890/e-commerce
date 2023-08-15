import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blog from './component/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgetpassword from './pages/Forgetpassword';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import ReturnPolicy from './pages/ReturnPolicy';
import TermsandConditions from './pages/TermsandConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProduct from './pages/SingleProduct';
import ProductCard from './component/ProductCard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='About' element={<About />}/>
        <Route path='Contact' element={<Contact />}/>
        <Route path='Product' element={<Store />}/>
        <Route path='Blog' element={<Blog />}/>
        <Route path='Blog/:id' element={<Singleblog />}/>
        <Route path='Contact' element={<Contact />}/>
        <Route path='Compare-Product' element={<CompareProduct />}/>
        <Route path='WishList' element={<WishList/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='Forgetpassword' element={<Forgetpassword/>}/>
      <Route path='Reset-password' element={<Resetpassword/>}/>
      <Route path='ReturnPolicy' element={<ReturnPolicy/>}/>
      <Route path='TermsandConditions' element={<TermsandConditions/>}/>
      <Route path='ShippingPolicy' element={<ShippingPolicy/>}/>
      <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route path='Product/:id' element={<SingleProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;