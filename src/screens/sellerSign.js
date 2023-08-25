import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SellerSign = () => {
  const [credentials, setCredentials] = useState({
    vendorname: "",
    vendorcompany: "",
    vendornumber: "",
    vendorpassword: "",
    vendoraddress: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createvendor", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          vendorname: credentials.vendorname,
          vendorcompany: credentials.vendorcompany,
          vendornumber: credentials.vendornumber,
          vendorpassword: credentials.vendorpassword,
          vendoraddress: credentials.vendoraddress,
        })
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        console.log("success true")
        localStorage.setItem("sellToken", json.sellToken); 
       
      } else {
        alert("Enter Valid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
       <Navbar/>
<div className='container'>
<form onSubmit={handleSubmit}>
  <div class="form-row ">
    <div class="form-group col-md-6">
      <label for="inputname">Vendor Name</label>
      <input  onChange={onChange} name="vendorname" type="text" class="form-control" id="inputname" required placeholder="Vendor Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputcomname">Componey Name</label>
      <input onChange={onChange}  name="vendorcompany" type="text" class="form-control" id="inputcomname"required placeholder="Componey Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputnumber">Vendor Number</label>
      <input onChange={onChange}  name="vendornumber" type="number" class="form-control" id="inputnumber" required placeholder="Vendor Number"/>
    </div>

    <div class="form-group col-md-6">
      <label for="inputPassword4">Vendor Password</label>
      <input onChange={onChange}  name="vendorpassword" type="password" class="form-control" id="inputnumber" required placeholder="Password"/>
    </div> 
  </div>
  <div class="form-group">
    <label for="inputAddress">Resturent Address</label>
    <input onChange={onChange} name="vendoraddress" type="text" class="form-control" id="inputAddress" required placeholder="1234 Main St"/>
  <button type="submit" class="btn btn-primary">Sign in</button>
  </div>    
</form>
    </div>
      </>
    
  );
};

export default SellerSign;