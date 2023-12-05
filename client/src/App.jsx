import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Signin from "./pages/Signin";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "../src/styles/Loading/LoadingComponent";
import SuccessPage from "./pages/SuccessPage";
import UpdateInfoPage from "./pages/UpdateInfoPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loading" element={<LoadingComponent />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/updateInfo/:id" element={<UpdateInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
