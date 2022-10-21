const mongoose = require("mongoose");
const { Schema, model } = require('mongoose')

const favListSchema = new mongoose.Schema(
  {
    favListName: {
      type: String,
      required: true,
    },
    favListOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favs: { type: mongoose.Schema.Types.ObjectId, ref: "Fav" },
  },
  { timestamps: true }
);

const FavList = mongoose.model("favList", favListSchema);
module.exports = FavList;
