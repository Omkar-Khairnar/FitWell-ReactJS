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
import AdminHome from './components/adminDashboard/adminHome/AdminHome';
import Order from './components/adminDashboard/order/Order';
import AdminPayment from './components/adminDashboard/payment/AdminPayment';
import Trainers from './components/adminDashboard/trainers/Trainers';
import Challenges from './components/userDashboard/challenges/Challenges';
import UserNavbar from './components/userDashboard/navbar/UserNavbar';
import UserHome from './components/userDashboard/home/UserHome';
import Workouts from './components/userDashboard/workouts/Workouts';
import UserOrders from './components/userDashboard/myOrders/UserOrders';
import UserCart from './components/userDashboard/cart/UserCart';

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
          </Route>
            {/* <Route path="/" element={<UserCart/>} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
