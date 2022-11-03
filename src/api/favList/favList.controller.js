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
      res.status(201).json({ message: "✅favlist created", info: newFavlist });
    } catch (error) {
      res
        .status(400)
        .json({ message: `❌favlist could NOT be created`, info: error });
    }
  },
  /* get show list */
  async getAllFavList(req, res) {
    try {
      const id = req.user;
      const user = await User.findById(id).populate("favList").select('-_id -password');

      const favsLists = user.favList

      if(favsLists === []){
        res.message({ message: `❌ User has no Favs Lists`})
      }

      res.status(200).json({ message: `✅ Fav Lists found:`, info:favsLists });
    } catch (error) {
      res
        .status(404)
        .json({ message: "❌ Favs Lists NOT found", info:error.info });
    }
  },

  /* get show single list */
  async getSingleFavList(req, res) {
    try {
      const id = req.user;
      const favListId = req.params.id;

      const singleFavList = await FavList.findById(favListId).populate('favs');

      if(singleFavList === null){
        res.message({ message: `❌ No Fav List yet`})
      }

      res
        .status(200)
        .json({ message: `✅ Fav List found:`, info: singleFavList });
    } catch (error) {
      res
        .status(404)
        .json({ message: `❌ Fav List could not be found:`, info: error.info });
    }
  },

  /* delete */
  async deleteFavList(req, res) {
    try {
      const userId = req.user;
      const { id } = req.params;

      const user = await User.findById(userId);
      const favsLists = user.favList;
      const singleFavList = await FavList.findById(id);

      if (!singleFavList){
        const error = new Error('if error')
        error.message = 'id not found'
        throw error
      }


      favsLists.pull(id);
      user.save({ validateBeforeSave: false });

      const singleFavListDeleted = await FavList.deleteOne(singleFavList);

      res
        .status(200)
        .json({ message: "✅ Fav List deleted", info: singleFavListDeleted });
    } catch (error) {
      res
        .status(400)
        .json({
          message: "❌ Favs List could not be deleted",
          info: error.message,
        });
    }
  },
};
