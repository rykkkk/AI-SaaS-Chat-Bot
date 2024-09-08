import { connect, disconnect } from "mongoose";
//export default
async function connectDB() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error("Cannot connect to MongoDB");
  }
}

async function disconnectDB() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cannot disconnect from MongoDB");
  }
}

export { connect, disconnectDB };
