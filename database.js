import  mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        const { STAGE } = process.env;

        if(!STAGE) console.error("You dont have any enviroment configured");

        const database = process.env[`DATABASE_${STAGE.toUpperCase()}_CONNECTION`];
        
        await mongoose.connect(database, {
            useNewUrlParser: true
        })
        console.log('========> Data base is connected');
    } catch (error) {
        console.error('Error to connect to database ===>', error);
    }
} 