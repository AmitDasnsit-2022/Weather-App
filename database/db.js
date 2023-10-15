import mongoose from 'mongoose';

const mongodbUrl = "mongodb://127.0.0.1:27017/Weather-App"

const connection = () => {
    try{
        mongoose.connect(mongodbUrl,{
            useNewUrlParser : true,
            useUnifiedTopology : true,

        });

        mongoose.connection.on("connected",()=>{
            console.log("Connected to database");
        });
        mongoose.connection.on("disconnected",()=>{
            console.log("Disconnected from database");
        });



    }catch(error){
        console.log(error);
    }
}
export default connection;