import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Account from './pages/Account';
import Error from './pages/Error';
import Nav from './components/Nav';
import Cart from './pages/Cart';

const App = () => {

  return (
    <CartProvider>
      <AuthProvider>
      <Router basename="">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} /> 
          <Route path="/women" element={<Women />} /> 
          <Route path="/kids" element={<Kids />} />
          <Route path="/account" element={<Account />} /> 
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;

