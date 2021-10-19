<<<<<<< HEAD
const { sign } = require("jsonwebtoken");
=======
const { sign } = require('jsonwebtoken');
>>>>>>> 949613dcc830da22942590b8943d57589112145f

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user._id },
    process.env.TOKEN_TEXT,
    {
      // in seconds 600s = 10 min
      expiresIn: 100,
    }
  );
  console.log(accessToken);
  return accessToken;
};
<<<<<<< HEAD

module.exports = { createToken };
=======
const checkToken = async (req, res, next) => {
  console.log(req.headers.authorization);
  // Bearer used for Auth2.0 which's a cryptic string
  // Take Bearer out
  const accessToken = req.headers.authorization.split(' ')[1];
  console.log(accessToken);
  if (accessToken == 'null') {
    return res.json({ auth: false, message: 'User NOT Authenticated!' });
  }
  try {
    const validToken = await verify(accessToken, process.env.TOKEN_TEXT);
    if (validToken) {
      // later as middleware
      // next();
      return res
        .status(200)
        .json({ auth: true, message: 'User is Authenticated!' });
    } else {
      return res
        .status(404)
        .json({ auth: false, message: 'You need to login!' });
    }
  } catch (err) {
    res.status(err.status).json({ auth: false, message: err.message });
  }
  next();
};

module.exports = { createToken, checkToken };

/* 
const (sign, verify) = require("jsonwebtoken";
const JWT = require("jsonwebtoken");
JWT.sing()

const createToke = (user) => {
const accessToken = sign({
  username: user.username, 
  id: user._id
  }, 
  process.env.TOKEN_TEXT)
  };

console.log(accessToken)
return accessToken;

}
const checkToken = (req, res, next) => {

  next();
}

module.exports = { createToken };

/*  */
>>>>>>> 949613dcc830da22942590b8943d57589112145f
