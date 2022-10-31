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
    function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    console.log("You have entered an invalid email address!")
    return (false)
}
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
