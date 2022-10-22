const FavList = require("./favList.model");
const User = require("../user/user.model.js");

module.exports = {
  /* post create new */
  async postFavlist(req, res) {
    try {
      const id = req.user;
      const user = await User.findById(id);
      const favListData = req.body;
      const newFavlist = await FavList.create({
        ...favListData,
        favListOwner: id,
      });
      user.favList.unshift(newFavlist);
      await user.save({ validateBeforeSave: false });
      res.status(201).json({ message: `✅favlist created`, data: newFavlist });
    } catch (error) {
      res
        .status(400)
        .json({ message: `❌favlist could NOT be created`, data: error });
    }
  },
  /* get show list */
  async getAllFavList(req, res) {
    try {
      const { id, userName } = req.user;
      const user = await User.findById(id);
      const favsLists = await FavList.find({ user: id });
      res.status(200).json({ message: `✅ Fav Lists found:`, data: favsLists });
    } catch (error) {
      res.status(404).json({ message: `❌ Favs Lists found`, data: error });
    }
  },

  /* get show single list */
  async getSingleFavList(req, res) {
    try {
      const userId = req.user;
      const { id } = req.params;
      const user = await User.findById(userId);
      const singleFavList = await FavList.find({_id:id, user:userId});
      res.status(200).json({ message: `✅ Fav List found:`, data: singleFavList });
    } catch (error) {
      res.status(404).json({ message: `❌ Fav List could not be found:`, data: error });
    }
  },

  /* delete */
  async deleteFavList(req, res) {
    try {
      const userId = req.user;
      const { id } = req.params
      const user = await User.findById(userId);
      const singleFavList = await FavList.find({_id:id, user:userId});
      const favsList = await FavList.deleteOne(singleFavList)
      res.status(200).json({ message: '✅ Fav List deleted', data: favsList})
    } catch(err) {
      res.status(400).json({ message: '❌ Favs List could not be deleted', data: err})
    }
  }
};
