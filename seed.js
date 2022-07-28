import { Character } from "./API/models/Character.js";
import { Episode } from "./API/models/Episode.js";
import { Location } from "./API/models/Location.js";
import { Characters } from "./API/data/characters.js";
import { Episodes } from "./API/data/episodes.js";
import { Locations } from "./API/data/locations.js";
import "./API/database.js";
import mongoose from "mongoose";

const seedDB = async () => {
  await Character.deleteMany({});
  await Episode.deleteMany({});
  await Location.deleteMany({});
  await Character.insertMany(Characters);
  await Episode.insertMany(Episodes);
  await Location.insertMany(Locations);
};

seedDB().then(() => mongoose.connection.close());
