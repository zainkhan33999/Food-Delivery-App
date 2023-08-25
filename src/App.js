import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { CartProvider } from './components/ContextRuducer';
import MyOrder from './screens/MyOrder';
import Signup from './screens/userSign.js';
import Seller from './screens/sellerSign.js';
import MyProducts from './screens/MyProducts';



function App() {
  return (

    <CartProvider>
    <Router>
      <div> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path = "/creatuser" element = {<Signup/>}/>
        <Route exact path = "/createseller" element = {<Seller/>}/>
        <Route exact path = "/myOrder" element = {<MyOrder/>}/>
        <Route exact path = "/MyProducts" element = {<MyProducts/>}/>
      </Routes>
      </div>
    </Router>
     </CartProvider>
  
  );
}

export default App;
