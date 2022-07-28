import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EpisodeSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  air_date: {
    type: String,
    required: true,
  },
  episode: {
    type: String,
    required: true,
  },
  characters: {
    type: Array,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
});

export const Episode = model("Episode", EpisodeSchema, "episodes");
