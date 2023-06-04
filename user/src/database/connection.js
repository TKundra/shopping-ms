const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  try {
    mongoose.connect(DB_URL, (err) => {
      if (err) {
        console.error('MONGO ERROR', err.message);
      }
    });

    mongoose.set('strictQuery', true);

    const connection = mongoose.connection;

    connection.on('connected', function() {
      console.log('info - Mongoose connection established');
    });

    connection.on('error', function() {
      console.log('fatal - Mongoose connection error');
    });

    connection.on('disconnected', function() {
      console.log('fatal - Mongoose disconnected');
    });
    
  } catch (error) {
    console.log("-------- Error --------");
    console.error(error);
    process.exit(1);
  }
};
