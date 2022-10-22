const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 2,
    },
    favList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FavList",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  try {
    if (!user.isModified("password")) {
      next();
    }

    const hash = await bcrypt.hash(user.password, 11);
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
