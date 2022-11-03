const mongoose = require("mongoose");
const { Schema, model } = require('mongoose')

const favSchema = new mongoose.Schema(
  {
    favOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favOfList: {
      type: Schema.Types.ObjectId,
      ref: "FavList",
      required: true,
    },
    favTitle: {
      type: String,
      required: true,
      unique: true,
    },
    favDescription: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

const Fav = mongoose.model("Fav", favSchema);

module.exports = Fav;
