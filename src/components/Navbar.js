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

  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();

  const authToken = localStorage.getItem('authToken');
  const seller = localStorage.getItem("Seller")

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
              {authToken && (
                <div className='d=flex'>
                 (
                  <Link className="nav-link fs-5 mx-4 active" aria-current="page" to="/myProducts"> {/* Change the link destination */}
                    My Products
                  </Link>
                ) : (
                  <Link className="nav-link fs-5 mx-4 active" aria-current="page" to="/myOrder">
                    My Orders
                  <Link className='btn text-success mx-1' to="/createseller">
                  Become a Seller
                </Link>
                  </Link>
                )
                  <button onClick={handleLogout} className="btn  text-danger  ">
                    Logout
                  </button>
                 </div>
                 
              )}
            </ul>
            {!authToken ? (
              <form className="d-flex">
                <Link className="btn text-success mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn  text-success mx-1" to="/creatuser">
                  Signup
                </Link>
               
              </form>
            ) : (
              ''
            )}
            {authToken &&(
              <div>
                <div className="btn bg-white text-primary mx-2" onClick={loadCart}>
                  <Badge color="secondary" badgeContent={items.length}>
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>
                {cartView && (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
