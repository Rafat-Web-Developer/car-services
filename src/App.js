// import './App.css';
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login/Login";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import CheckOut from "./Pages/CheckOut/CheckOut";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Profile from "./Pages/Profile/Profile";
import AddService from "./Pages/AddService/AddService";
import AllServices from "./Pages/AllServices/AllServices";
import { ToastContainer } from "react-toastify";
import EditService from "./Pages/EditService/EditService";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/allServices"
          element={
            <RequireAuth>
              <AllServices></AllServices>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addService"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/editService/:serviceId"
          element={
            <RequireAuth>
              <EditService></EditService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile></Profile>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
