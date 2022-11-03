const FavList = require("../favList/favList.model");
const Fav = require('./fav.model')

module.exports ={
  async postFav(req, res) {
    try {
      const userId = req.user
      const favlistId = req.params.id;
      const favData = req.body;

      const favList = await FavList.findById(favlistId);

      if(!favList){
        res.message("❌Favlist dosn't exist");
      }

      const newFav = await Fav.create(
        {
        ...favData,
        favOwner: userId,
        favOfList: favlistId
        }
      );

      favList.favs.unshift(newFav);
      await favList.save({ validateBeforeSave: false });
      res.status(201).json({ message: `✅single fav created`, info: newFav });
    } catch (error) {
      console.log("💀", error)
      res
        .status(404)
        .json({ message: '❌ single fav could NOT be created', info:error.message});
    }
  },
}
