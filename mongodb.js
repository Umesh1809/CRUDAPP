// ⚡ Modified connection logic to prevent server boot freezes:
mongoose.connect('mongodb://mongodb-service:27017/crudapp', {
    serverSelectionTimeoutMS: 5000 // Time out after 5 seconds instead of hanging forever
}).then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch(err => {
    console.error("MongoDB connection failed, but keeping server alive:", err.message);
});

// Keep this outside the database callback block so the port opens instantly!
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is live on port ${PORT}`);
});
