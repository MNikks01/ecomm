
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import helmet from "helmet";
import connectToDB from "./src/config/db";

import userRoutes from './src/routes/user.routes.js'
import paymentRoutes from './src/routes/payment.routes.js'
import productsRoutes from './src/routes/products.routes.js'
import reviewRoutes from './src/routes/review.routes.js'
import orderRoutes from './src/routes/order.routes.js'

dotenv.config();

const server = express();

// db connection
connectToDB()
    .then(() => {
        console.log('database connection successful')
    })
    .catch(() => {
        console.log('database connection failed')
    })

// cors middleware
server.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    methods: ['GET', "POST", 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    optionsSuccessStatus: 200
}))

// hemlet middleware
server.use(helmet());

// middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())

// routes
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/product', productsRoutes)
server.use('/api/v1/review', reviewRoutes)
server.use('/api/v1/payment', paymentRoutes)

// server
const port = process.env.PORT || 3001;
server.listen(3000, () => {
    console.log("Server is running on port", port);
});