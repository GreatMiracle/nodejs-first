module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "123456@",
  PORT: 3307,
  DB: "realtime",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
