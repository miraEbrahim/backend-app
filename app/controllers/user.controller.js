exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.developerBoard = (req, res) => {
  res.status(200).send("Developer Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.psBoard = (req, res) => {
  res.status(200).send("PS Content.");
};
