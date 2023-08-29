const mongoose = require("mongoose");
const Product = require("./models/productmodel.js");

const mongoURI = "mongodb+srv://tahazaman555:Karachi123@cluster0.scrsveh.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log("Connected to MongoDB");

    const productsToAdd = [
        {
            productName: "Product 1",
            price: 10,
            quantity: 50,
            description: "Description of Product 1",
        },
        {
            productName: "Product 2",
            price: 20,
            quantity: 30,
            description: "Description of Product 2",
        },
        // Add more products here as needed
    ];

    try {
        const createdProducts = await Product.create(productsToAdd);
        console.log("Products added to the database:", createdProducts);
    } catch (error) {
        console.error("Error adding products:", error);
    }
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});


