import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CharacterSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  species: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  episode: {
    type: Array,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true
  }
});

export const Character = model("Character", CharacterSchema, "characters");
