import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: String,
    email: {
        type: String,
        required: true,
    },
    phone: String,
    address: String,
    description: String,
    created_at: { type: Date, default: Date.now }
})
