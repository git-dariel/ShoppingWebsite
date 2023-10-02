import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Signin from "./pages/Signin";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
