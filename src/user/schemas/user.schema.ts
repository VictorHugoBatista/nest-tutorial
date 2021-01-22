import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})
