
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Badge, Button } from 'react-bootstrap';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup'
import { useEffect, useState } from 'react';
import ProductGallary from './Components/ProductGallary';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  const navigate = useNavigate();
  const [user,setUser]=useState('');
  const [cartItems,setCartItems]=useState({});
  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail)
    }
  },[])

  const handleAddToCart=(item)=>{
    setCartItems({...cartItems,...item})
    }




  return (
    <div className="App">
      <Navbar className='instabuy-navbar'>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Insta Buy</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {user && <Button onClick={()=>navigate('/cart')}>Cart &nbsp;{Object.keys(cartItems).length>0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={()=>{navigate('/login')}}>{user ? 'Logout':'Login'}</Button>
          </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path='/' element={<Home user={user} />}/>
      <Route path='/login' element={<Login setUser={setUser}/>}/>
      <Route path='/signup' element={<Signup  setUser={setUser} />}/>
      <Route path='/products' element={<ProductGallary/>}/>
      <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>} />
      <Route path='/cart' element={<Cart cartItems={cartItems}/>} />
      <Route path='/checkout' element={< Checkout/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
