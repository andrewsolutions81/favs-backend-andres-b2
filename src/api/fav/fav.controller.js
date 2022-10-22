const FavList = require("./favList.model");
const FavList = require("../favList/favList.model");

module.exports ={
  async postFav(req, res) {
    try {
      const id = req.favList;
      const favList = await User.findById(id);
      const favData = req.body;
      const newFav = await Fav.create({
        ...favData,
        favListMember: id,
      });
      favList.favs.unshift(newFav);
      await favList.save({ validateBeforeSave: false });
      res.status(201).json({ message: `✅single fav created`, info: newFav });
    } catch (error) {
      res
        .status(400)
        .json({ message: `❌ single fav could NOT be created ${error}` });
    }
  },
}
