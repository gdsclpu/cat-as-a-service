import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    sno: {
      type: Number,
      required: true,
    },
    catid: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    photos: [
      {
        small: {
          type: String,
          required: true,
        },
        medium: {
          type: String,
          required: true,
        },
        large: {
          type: String,
          required: true,
        },
        full: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    strict: false,
    timestamps: true,
    autoIndex: true,
  }
);

export default mongoose.model("cats", catSchema);
