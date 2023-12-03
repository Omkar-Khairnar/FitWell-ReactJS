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


// import AdminHome from './components/adminDashboard/adminHome/adminHome';
// import Order from './components/adminDashboard/order/Order';
// import AdminPayment from './components/adminDashboard/payment/AdminPayment';
// import Trainers from './components/adminDashboard/trainers/Trainers';


import UserDashboard from './components/userDashboard/UserDashboard';
import Challenges from './components/userDashboard/challenges/Challenges';
import UserNavbar from './components/userDashboard/navbar/UserNavbar';
import UserHome from './components/userDashboard/home/UserHome';
import Workouts from './components/userDashboard/workouts/Workouts';
import UserOrders from './components/userDashboard/myOrders/UserOrders';
import UserCart from './components/userDashboard/cart/UserCart';
import Profile from './components/userDashboard/profile/Profile';
import Signin from './components/UserAuthentication/UserSignIn';
import UserReviews from './components/userDashboard/reviews/UserReviews';
import UserPayment from './components/userDashboard/payment/UserPayment';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} >
            <Route path='/' element={<Navigate to="/Home" replace />} />
            {/* <Route path="/LandingPage" element={<LandingPage />} /> */}
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
          <Route element={<UserDashboard />} >
            <Route path="/UserDashboard" element={<Navigate to="/UserHome" replace />} />
            <Route path="/UserDashboard" element={<UserDashboard/>} />
            <Route path="/UserHome" element={<UserHome/>} />
            <Route path='/UserNavbar' element={<UserNavbar />} />
            <Route path='/UserProfile' element={<Profile />}/>
            <Route path='/UserOrders' element={<UserOrders />}/>
            <Route path='/UserCart' element={<UserCart />}/>
            <Route path='/UserReviews' element={<UserReviews />}/>
            <Route path='/UserWorkout' element={<Workouts />}/>
            <Route path='/UserChallenges' element={<Challenges />}/>
            <Route path='/UserPayment' element={<UserPayment />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
