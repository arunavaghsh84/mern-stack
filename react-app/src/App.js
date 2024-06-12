import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './contexts/CartContext';
import Cart from './screens/Cart';
import Orders from './screens/Orders';

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
