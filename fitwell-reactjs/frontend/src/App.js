import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import AboutUs from './components/home/aboutUs/AboutUs';
import Footer from './components/home/footer/Footer';
import Home from './components/home/home/Home';
import Navbar from './components/home/navbar/Navbar';
import Pricing from './components/home/pricing/Pricing';
import Services from './components/home/services/Services';
import LandingPage from './components/home/LandingPage';
import Products from './components/home/products/Products';
import ProductSearch from './components/home/products/ProductSearch';
import Centers from './components/home/centers/Centers';
import Reviews from './components/home/reviews/Reviews';
import ContactUS from './components/home/contactUs/ContactUS';
import Signin from './components/UserAuthentication/UserSignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} >
            <Route path='/' element={<Navigate to="/Home" replace />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductSearch" element={<ProductSearch />} />
            <Route path="/Centers" element={<Centers />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/ContactUS" element={<ContactUS />} />
            <Route path="/UserSignIn" element={<Signin/>} />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
