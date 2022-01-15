import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";



import userRoutes from './Routes/user.js';
import itemRoutes from "./Routes/item.js";
import mpesaRoutes from "./Routes/mpesa.js";




const app = express();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());
dotenv.config();

app.use("/user", userRoutes);
app.use("/items", itemRoutes);
app.use("/mpesa", mpesaRoutes);

const PORT = process.env.PORT  ;


const connectToDatabase = async () => {

    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,

            // useCreateIndex: true

        });
        console.log('MongoDB connected successfully!!');

    } catch (err) {
        console.log("database connection failed. exiting now...");
        console.error(err);
        process.exit(1);


    };
}
// connectToDatabase();

const server = async () => {
    try {
        await app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        );

    } catch (error) {
        console.log(`${error}not connected to the server`)
    }

};
server();