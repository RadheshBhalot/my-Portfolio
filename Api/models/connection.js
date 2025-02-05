import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = 'mongodb+srv://user:bhalot1818@cluster0.3eumw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
if (!dbURI) {
    console.error("MongoDB URI is missing! Check your environment variables.");
    process.exit(1);
}

mongoose.connect(dbURI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
