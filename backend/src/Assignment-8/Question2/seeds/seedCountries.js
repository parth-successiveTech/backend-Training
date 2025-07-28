// seeds/seedCountries.js
require('dotenv').config();
const mongoose = require('mongoose');
const Country = require('../../models/Country'); // use correct relative path

const countries = [
  { name: 'India', code: 'IN' },
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'England', code: 'ENG' },
  { name: 'South Africa', code: 'SA' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Sri Lanka', code: 'SL' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Afghanistan', code: 'AF' },
];

async function seedCountries() {
  try {
    await Country.deleteMany();
    await Country.insertMany(countries);
    console.log('✅ Countries seeded successfully');
  } catch (error) {
    console.error('❌ Seeding error:', error);
  }
}

module.exports = seedCountries; // 👈 MAKE SURE THIS LINE IS PRESENT
