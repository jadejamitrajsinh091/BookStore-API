import mongoose from "mongoose";

const connectDB = async () => {
  try 
  {
    const conn = await mongoose.connect(
      process.env.MONGO_URI 
    );

    console.log("Database Connected");

    return conn;

  } catch (error) 
  {
    console.log(error.message);
    return null;
  }
};

export default connectDB;
