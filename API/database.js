import mongoose from "mongoose";
import "dotenv/config.js";
const local = process.env.MONGODB_URI;

mongoose
  .connect(local, {
    useNewUrlParser: true,
    dbName: "RickAndMortyGraphQl",
  })
  .then(() => console.log('Database Connected!'))
  .catch((err) => console.log(err));
