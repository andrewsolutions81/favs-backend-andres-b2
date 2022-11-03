/* aplication routes */
const userRoute = require('./api/user/user.routes')
const favListRoute = require('./api/favList/favList.routes')
const favRoute = require('./api/fav/fav.routes')


function routes(app) {
  app.use('/auth/local', userRoute);
  app.use('/api/favs',favListRoute);
  app.use('/api/fav',favRoute)
};


 module.exports = routes;
