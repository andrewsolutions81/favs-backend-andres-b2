/* aplication routes */
const { auth } = require('./utils/auth')
const userRoute = require('./api/user/user.routes')


function routes(app) {
  app.use('/auth/local/login', userRoute);
};


 module.exports = routes;
