const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    // in postman  use Authorization capital A front upper case back lower case
    const { authorization } = req.headers;

    //if header comes in
    if (!authorization) {
      throw new Error("session expired auth");
    }

    //separate <bearer> from token
    const [_, token] = authorization.split(" ");

    //token verification
    const { id } = jwt.verify(token, process.env.SECRET_KEY_JWT);
    req.user = id;

    //if there is a token
    if (!token) {
      throw new Error("session expired token");
    }

    next();
  } catch (error) {
    res.status(401).json({ message: `NO AUTHENTICATED ${error}` });
  }
};
