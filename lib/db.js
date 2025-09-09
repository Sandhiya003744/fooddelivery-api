const mongoose = require ("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://sandhiyarameshkumar122_db_user:3a5qn8K13hmDQKMQ@cluster0.7lxxooc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
console.log("MongoDB connected..");
        
    } catch (error) {
        console.error(error.message);
            process.exit(1);

    }
};

export default connectDB;