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
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
