import mongoose, { Schema, Document } from 'mongoose';

export interface UserInterface extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: { 
        type: String,
         required: true
    },
    email: { type: String,
         required: true,
          unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true // Enable timestamps
});

export default mongoose.model<UserInterface>('User', userSchema);
