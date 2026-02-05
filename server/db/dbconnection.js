import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/socket');
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};
