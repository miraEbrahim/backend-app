module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Taggstar2020",
  DB: "taggdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
