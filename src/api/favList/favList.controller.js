const FavList = require("./favList.model");
const User = require("../user/user.model.js");

let problem = "_"
module.exports = {
  /* post create new */
  async postFavlist(req, res) {
    try {
      const id = req.user;
      problem = id
      const user = await User.findById(id);
      const favListData = req.body;
      const newFavlist = await FavList.create({
        ...favListData,
        favListOwner: id,
      });
      user.favList.unshift(newFavlist);
      await user.save({ validateBeforeSave: false });
      req.status(201).json({ message: `✅favlist created`, info: newFavlist });
    } catch (error) {
      res
        .status(400)
        .json({ message: `❌favlist could NOT be created ${error}, ${problem}` });
    }
  },
  /* get show list */
  /* put update modify */
  /* delete */
};
