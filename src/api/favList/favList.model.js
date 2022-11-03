const mongoose = require("mongoose");
const { Schema, model } = require('mongoose')

const favListSchema = new mongoose.Schema(
  {
    favListOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    favListName: {
      type: String,
      required: true,
    },
    favs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fav" }],
  },
  { timestamps: true }
);

const FavList = mongoose.model("FavList", favListSchema);
module.exports = FavList;
