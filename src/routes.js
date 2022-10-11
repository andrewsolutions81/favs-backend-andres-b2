/* aplication routes */
const userRoute = require('./api/user/user.routes')


function routes(app) {
  app.use('/auth/local/login', userRoute);
};


 module.exports = routes;
