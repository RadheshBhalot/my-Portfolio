// Load environment variables from a local .env file (if it exists)
// This line is harmless on Vercel since you set the variable there already.
require('dotenv').config();

const mongoose = require('mongoose');

// Get the MongoDB URI from the environment variables.
// On Vercel, this comes from the Environment Variables settings.
// Locally, it will come from the .env file (if created).
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.error("MongoDB Connection Error:", err);
});
