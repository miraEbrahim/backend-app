exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("user Content.");
};

exports.developerBoard = (req, res) => {
  res.status(200).send("Developer Content.");
};

exports.onboardBoard = (req, res) => {
  res.status(200).send("OnBoarding Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.psBoard = (req, res) => {
  res.status(200).send("PS Content.");
};
