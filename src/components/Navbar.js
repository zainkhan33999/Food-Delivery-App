import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './ContextRuducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';



export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('./login');
  };
const handleUser = () =>{
  localStorage.removeItem('sellToken')
  navigate("/")
}
  const loadCart = () => {
    setCartView(true);
  };

 

  const items = useCart();

  const authToken = localStorage.getItem('authToken');
  const sellToken = localStorage.getItem("sellToken")

  return (
  
    
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black position-sticky"
        style={{
          boxShadow: '0px 10px 20px black',
          filter: 'blur(20)',
          position: 'fixed',
          zIndex: '10',
          width: '100%',
        }}
      >
        {/* <nav class="">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://www.clipartmax.com/png/middle/6-67623_chief-clipart-png-chef-logo-design-ideas.png" alt="Bootstrap" width="90" height="80"/>
    </a>
  </div>
</nav> */}
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic " to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {authToken && sellToken ? (
                <div className='d-flex'>
                  <Link className="nav-link fs-5 mx-4 active" aria-current="page" to="/MyProducts">
                    My Products
                  </Link>
                <button className='btn text-warning' onClick={handleUser}>
                  Switch To User
                </button>
                 
                </div>
              ) : null}

              {/* Display if only authToken is present */}
          
              {authToken && !sellToken ? (
                <>
  <div className='d-flex'>
    <Link className="nav-link fs-5 mx-4 active" aria-current="page" to="/myOrder">
      My Orders
    </Link>
    <Link className='btn text-success mx-1 mt-1' to="/createseller">
      Become a Seller
    </Link>
    
    <div className="btn text-info text-primary mt-1" onClick={loadCart}>
      <Badge color="secondary" badgeContent={items.length}>
        <ShoppingCartIcon />
      </Badge>
      Cart
      
    </div>
    <button className='btn text-danger mx-1 mt-1'onClick={handleLogout}>
 Logout
    </button>
    
    {cartView && (
      <Modal onClose={() => setCartView(false)}>
        <Cart />
      </Modal>
    )}
  </div>

</>
) : null}  


              {/* Display if neither authToken nor sellToken is present */}
              {!authToken && !sellToken ? (
                <form className="d-flex">
                  <Link className="btn text-success mx-1" to="/login">
                    Login
                  </Link>
                  <Link className="btn text-warning mx-1 " to="/creatuser">
                    Signup
                  </Link>
                </form>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}