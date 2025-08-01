// index.js
require('dotenv').config();
const mongoose = require('mongoose');
const seedCountries = require('./seeds/seedCountries');
const Country = require('./models/Country');


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

async function startApp() {
  await connectDB();

  await seedCountries();

  const countries = await Country.find();
  console.log('🌍 Countries in DB:', countries.map(c => c.name));

  mongoose.disconnect();
}

startApp();
