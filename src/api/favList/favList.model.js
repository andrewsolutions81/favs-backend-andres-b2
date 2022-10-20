const mongoose = require ('mongoose');

const favListSchema = new mongoose.Schema({
  favListName: {
    type: String,
    required: true,
  },
  favs:
  {type: mongoose.Schema.Types.ObjectId, ref: 'Fav'}
}, { timestamps: true });

const FavList = mongoose.model("favList",favListSchema);
module.exports = FavList
