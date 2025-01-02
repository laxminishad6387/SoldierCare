import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    role:{
        type:String,
        required:[true, "Role is required"],
    }
},{
    timestamps:true
});

userSchema.pre('save', async function() {
    //here you can modify your user before it is saved to the database
    console.log("Exceuting pre save hook");
    console.log(this);
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    console.log("Exceuted pre save hook and exiting");
    console.log(this);
  });

const User = mongoose.model("User", userSchema);

export default User;