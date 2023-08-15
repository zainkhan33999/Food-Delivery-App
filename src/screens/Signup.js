import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
const [credenditials, setcredenditials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const respone = await fetch("http://localhost:5000/api/createuser",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
  
    body:JSON.stringify(
      {name:credenditials.name,email:credenditials.email,password:credenditials.password,location:credenditials.geolocation}
    )
    })
    const json = await respone.json()
    console.log(json)
    if(!json.success){
      alert("Enter Valid Creditials")
    }
  } 
  const onChange = (event)=>{
    setcredenditials({
      ...credenditials,[event.target.name] :event.target.value})
      
    } 
  
  return (
<>
<div className='container '>


<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credenditials.name} onChange={onChange}/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credenditials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"value={credenditials.password}  name= "password" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
    <input type="text"value={credenditials.geolocation}  name= "geolocation" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <button type="submit" className="m-3  btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>

</form>
</div>
</>
  )
}

export default Signup