const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  userName: {
    type:"string",
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    minLength: 6,
  },
  password:{
    type: String,
    required: true,
    minLength: 4,
  },
  favList: [
    {
      type: String,
      ref : 'FavList'
    }
  ]
},
{ timestamps: true });

UserSchema.pre('save', async function(next) {
  const user = this
  try {
    if (!user.isModified('password')){
      next()
    }

    const  hash = await bcrypt.hash(user.password, 11)

  } catch (error) {
    next(error)
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
