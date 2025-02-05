const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI; // Vercel pe set kiya hua environment variable
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});
