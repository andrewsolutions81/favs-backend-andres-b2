const mongoose = require("mongoose");

const favSchema = new mongoose.Schema(
  {
    favListMember: {
      ype: Schema.Types.ObjectId,
      ref: "FavList",
      required: true,
    },
    favTitle: {
      type: String,
      required: true,
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

const Fav = mongoose.model("fav", favSchema);

module.exports = Fav;
