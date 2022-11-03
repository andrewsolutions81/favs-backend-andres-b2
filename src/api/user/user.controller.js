const User = require('./user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

  async list(req, res){
    try {
      const users = await User.find().populate('favList').select('-_id -password')

      res.status(201).json({ message: "✅users found", info: users })
    } catch(error){
      res.status(400).json({ message:"❌users could NOT be found", info:error.info})
    }
  },

/* signup */
  async signup (req, res) {
    try {
      const { userName, email, password } = req.body
      const passwordHash = await bcrypt.hash(password, 11)

      const user = await User.create({userName:userName, email:email, password:passwordHash})

      const token  = jwt.sign(
        { id: user._id},
        process.env.SECRET_KEY_JWT,
        { expiresIn: 60 * 60 * 24}//one day
      )
      res.status(201).json({ message: "✅user created", info: { token, userName, email } })
    } catch (error) {
      res.status(400).json({ message:"❌user could NOT be created", info:error.message})
    }
  },

  /* login  */
  async login(req, res) {
    try {
      const { userName, email, password } = req.body

      const user = await User.findOne({ email })
      if(!user){
        throw new Error(`invalid credentials email`)
      }
      const isValid = await bcrypt.compare( password, user.password)

      if(!isValid){
        throw new Error(`invalid credentials password`)
      }

      const token  = jwt.sign(
        { id: user._id},
        process.env.SECRET_KEY_JWT,
        { expiresIn: 60 * 60 * 24}
      )

      res.status(201).json({  message: "✅ user logged in", info: { token, userName, email } })

    } catch (error) {
      res.status(400).json({ message:"❌ user could not login", info:error.message})
    }
  },
}
