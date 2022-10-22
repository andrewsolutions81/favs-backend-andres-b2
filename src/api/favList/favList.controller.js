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
      res.status(201).json({ message: `✅favlist created`, info: newFavlist });
    } catch (error) {
      res
        .status(400)
        .json({ message: `❌favlist could NOT be created ${error}` });
    }
  },
  /* get show list */
  /* put update modify */
  /* delete */
};
