import mongoose from "mongoose";

const { Schema, model } = mongoose;

const LocationSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  dimension: {
    type: String,
    required: true,
  },
  residents: {
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

export const Location = model("Location", LocationSchema, "locations");
