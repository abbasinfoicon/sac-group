import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'sac_group',
        }
        await mongoose.connect(DB_URL, DB_OPTIONS);
        console.log(`Connection Succssfull at ${DB_URL}`);
        
    } catch (error) {
        console.log(`Connection Failed...!!!`);
    }
}

export default connectDB;