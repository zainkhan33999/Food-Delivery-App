const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://QuickBites:quickbites@cluster0.j3bnfkm.mongodb.net/QuickBites";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Connected to MongoDB');

    fetchData();
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};

async function fetchData() {
  try {
    const fetched_data = mongoose.connection.db.collection("food_items"); 
    const data = await fetched_data.find({}).toArray()
     global.food_items = data 
 
 
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  try {
    const fetched_data = mongoose.connection.db.collection("food_category"); 
    const categoryData = await fetched_data.find({}).toArray()
     global.food_category = categoryData 
    
 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = connectDB;
