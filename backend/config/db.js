
import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://karanrana3095:lpKce0r5Yi0GLhO6@cluster0.cuvnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
       console.log('DB connected') ;
    })
}
