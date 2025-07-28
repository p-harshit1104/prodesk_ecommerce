import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-green-400">
        <Navbar />
      </div>
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      
      <footer className="bg-slate-900 text-white py-4 text-center">
        <p>© 2025 Harshit Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;