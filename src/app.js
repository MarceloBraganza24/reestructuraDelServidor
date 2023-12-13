import express from 'express';
import mongoose from "mongoose";
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import initializePassport from "./config/passport.js";
import passport from "passport";
import cookieParser from "cookie-parser";
import configs from "./config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

initializePassport();
app.use(passport.initialize());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

try {
    await mongoose.connect('mongodb+srv://marcelobraganza:e1F2rVXZTe29Djol@clusterlito.1upqpvq.mongodb.net/ecommerce?retryWrites=true&w=majority')
    console.log('DB connected...')
} catch (error) {
    console.log(error.message);
}

console.log(configs);

app.listen(8080);