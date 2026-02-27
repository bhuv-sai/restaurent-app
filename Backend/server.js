import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config(); 

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
