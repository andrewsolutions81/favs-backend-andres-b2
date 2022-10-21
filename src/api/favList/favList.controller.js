const FavList = require("./favList.model");
const User = requre("../user/user.model.js");

module.exports = {
  /* post create new */
  async postFavlist(req, res) {
    try {
      const id = req.user;
      const user = await User.findById(id);

      const favListData = req.body;
      const newFavlist = await FavList.create({
        ...favListData , favListOwner:user
      });
    } catch (error) {}
  },
  /* get show list */
  /* put update modify */
  /* delete */
};
