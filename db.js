const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDb;
