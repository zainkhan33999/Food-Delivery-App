import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function MenuForm ({ onSubmit }) {
    const [CategoryName, setCategoryName] = useState('');
    const [name, setItemName] = useState('');
    const [img, setItemImg] = useState('');
    const [options, Setoptions] = useState({
      small: '',
      medium: '',
      large: '',    
        half: '',
        full: '', 
      }
     
    );
    const [description, setItemDescription] = useState('');
      
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newItem = {
        CategoryName: CategoryName,
        name: name,
        img: img,
        options: [
          {
          ...options
          },
        ],
        description: description}
  
  
      const response = await fetch("http://localhost:5000/api/sam", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)

    })
    console.log(response)
if(response.ok){
  const updatedDataResponse = await fetch("http://localhost:5000/api/sam");
  const updatedData = await updatedDataResponse.json();
  if (typeof onSubmit === 'function') {
      onSubmit(updatedData);
    }
}
    // Reset form fields here
    setCategoryName('');
    setItemName('');
    setItemImg('');
    Setoptions("")
    setItemDescription('');

    
  };
  const handleOptionChange = (optionName, value) => {
    Setoptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: value,
    }));
  };

  const renderOptions = () => {
    if (CategoryName === 'Pizza') {
      return (
        <>
          <label>Small Price:</label>
          <input
            type="text"
            value={options.small}
            onChange={(e) => handleOptionChange('small', e.target.value)}
            required
          />
  
          <label>Medium Price:</label>
          <input
            type="text"
            value={options.medium}
            onChange={(e) => handleOptionChange('medium', e.target.value)}
            required
          />
  
          <label>Large Price:</label>
          <input
            type="text"
            value={options.large}
            onChange={(e) => handleOptionChange('large', e.target.value)}
            required
          />
        </>
      );
    } else if (CategoryName === 'Biryani/Rice' || CategoryName === "Starter") {
      return (
        <>
          <label>Half Price:</label>
          <input
            type="text"
            value={options.half}
            onChange={(e) => handleOptionChange('half', e.target.value)}
            required
          />
  
          <label>Full Price:</label>
          <input
            type="text"
            value={options.full}
            onChange={(e) => handleOptionChange('full', e.target.value)}
            required
          />
        </>
      );
    } else {
      return null; // Return null when no specific options are needed
    }
  };
  
    
  
  

  return (
    <>
    <Navbar/>
    <div className="container mt-5  ">
      <h2>Add New Menu Item</h2>
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Category Name:</label>
          <select
  className="form-control"
  value={CategoryName}
  onChange={(e) => setCategoryName(e.target.value)}
  required
>

      <option value="">Select Category</option>
          <option value="Biryani/Rice">Biryani/Rice</option>
          <option value="Pizza">Pizza</option>
          <option value="Starter">Starter</option>
          </select>
        </div>

        <div className="form-group">
          <label>Item Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Insert Picture URL</label>
          <input
            type="text"
            className="form-control"
            value={img}
            accept="image/*"
            onChange={(e) => setItemImg(e.target.value)}
            required
          />
        </div>

        {renderOptions()}

        <div className="form-group">
          <label>Item Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  </>
  );
}
export default MenuForm ;