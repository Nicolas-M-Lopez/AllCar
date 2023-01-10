import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
            <Route path='/category/:marca' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <ToastContainer/>
        </CartProvider>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
