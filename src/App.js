import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Controllers/Login/Login";
import AdminLogin from "./Controllers/AdminLogin/AdminLogin";
import Userreg from "../src/Controllers/UserSignup/Userreg";
import AdminDashboard from "../src/Controllers/AdminDashboard/AdminDashboard";
import AddContext from "../src/Controllers/AddsContext/AddContext";
import Addbooking from "./Controllers/Addbooking/Booking";
import Category from "../src/Controllers/Category/Category";
import Getbyemail from "./Controllers/GetBookingsByEmail/GetByEmail";
import GetAllUserDetails from "./Controllers/GetAllUserDetails/getAllUserDetails";
import GetAllBookings from "./Controllers/GetAllBookings/GetAllBookings";
import Home from "./Controllers/Home/Home";
import About from "./Controllers/AboutUs/AboutUs";
import Payment from "./Controllers/Payment/Payment";
import UserDetailsByEmail from "./Controllers/GetUserDetailsByEmail/UserDetailsByEmail";
import UserDashboard from "./Controllers/UserDashboard/UserDashboard";
import ContactUs from "./Controllers/ContactUs/ContactUs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userregis" element={<Userreg />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/Context" element={<AddContext />} />
          {/* <Route path="/Category" element={<Category />} /> */}
          <Route path="/booking" element={<Addbooking />} />
          <Route path="/Getbyemail" element={<Getbyemail />} />
          <Route path="/GetAllUserDetails" element={<GetAllUserDetails />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/GetAllBookings" element={<GetAllBookings />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/UserDetailsByEmail" element={<UserDetailsByEmail />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/Contact" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
