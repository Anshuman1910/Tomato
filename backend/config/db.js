import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://anshumanchakraborty19:anshuman19@cluster0.6e8chps.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
//mongodb+srv://anshumanchakraborty19:anshuman19@cluster0.6e8chps.mongodb.net/