const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = process.env.MONGODB_ATLAS_URL;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connect;
