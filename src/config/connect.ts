import mongoose from "mongoose";

const connectToMongo = () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
  } catch (err) {
    throw new Error("Connecting with database failed!");
  }
};

export default connectToMongo;
