const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isDev = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "developer") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require developer Role!"
      });
      return;
    });
  });
};

isOnboard = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "onboard") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Onboard Role!"
      });
      return;
    });
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isPs = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "ps") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require PS Role!"
      });
    });
  });
};

// isPsDevOnBoardAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "ps") {
//           next();
//           return;
//         }

//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }

//         if (roles[i].name === "onboard") {
//           next();
//           return;
//         }

//         if (roles[i].name === "dev") {
//           next();
//           return;
//         }
//       }

//       res.status(403).send({
//         message: "Require  Admin Role!"
//       });
//     });
//   });
// };

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isPs: isPs,
  // isPsOrAdmin: isPsOrAdmin,
  isDev: isDev,
  isOnboard: isOnboard
};
module.exports = authJwt;
