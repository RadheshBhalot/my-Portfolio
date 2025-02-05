const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bhalotradhesh:bhalotradhesh@cluster0.3eumw.mongodb.net/contactData?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});
