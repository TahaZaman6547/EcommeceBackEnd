const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 
const orderRoutes = require('./routes/orderRoutes'); 
const productRoutes = require('./routes/productRoutes'); 

const app = express();
app.use(cors());

require("dotenv").config();

mongoose.connect(process.env.mongoURI).then(() => console.log('Connected!'));

app.use(express.json());

app.get("/first-api", (req, res) => {
    res.status(200).send("first Api is Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

app.listen(9000, () => console.log("Server is Running"));
