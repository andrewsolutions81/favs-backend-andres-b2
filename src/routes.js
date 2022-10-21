/* aplication routes */
const userRoute = require('./api/user/user.routes')
const favListRoute = require('./api/favList/favList.routes')


function routes(app) {
  app.use('/auth/local', userRoute);
  app.use('/api/favs',favListRoute)
};


 module.exports = routes;
