const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

// ============================
// MIDDLEWARE
// ============================
app.use(express.json());

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "../frontend")));

// ============================
// IMPORT MODEL
// ============================
const Product = require("./models/Product");

// ============================
// MONGODB CONNECTION
// ============================
mongoose.connect("mongodb://127.0.0.1:27017/fashioncart")
.then(async () => {

    console.log("MongoDB Connected ");

    

    insertProducts();

})
.catch(err => console.log("MongoDB Error:", err));

// ============================
// INSERT PRODUCTS
// ============================
async function insertProducts() {

    const count = await Product.countDocuments();

    if(count === 0){

        await Product.insertMany([

            {
                name: "Hoodie",
                price: 999,
                image: "/images/hoodie.jpg",
                category: "hoodie"
            },

            {
                name: "Jeans",
                price: 1499,
                image: "/images/jeans.jpg",
                category: "jeans"
            },

            {
                name: "Jumpsuit",
                price: 1999,
                image: "/images/jumpsuit1.jpg",
                category: "jumpsuit"
            },

            {
                name: "Lehanga Choli",
                price: 2999,
                image: "/images/lehangacholi.jpg",
                category: "traditional"
            },

            {
                name: "Oversized Tshirt",
                price: 799,
                image: "/images/Oversizedtshirt.jpg",
                category: "tshirt"
            },

            {
                name: "Pink Styled Skirt",
                price: 1199,
                image: "/images/pinkstyledskirt.jpg",
                category: "skirts"
            },

            {
                name: "Saree",
                price: 2499,
                image: "/images/saree.jpg",
                category: "saree"
            },

            {
                name: "Short Kurti",
                price: 899,
                image: "/images/shortkurti.jpg",
                category: "kurti"
            },

            {
                name: "Simple Kurti",
                price: 999,
                image: "/images/simplekurti.jpg",
                category: "kurti"
            },

            {
                name: "Skirts",
                price: 1299,
                image: "/images/skirts.jpg",
                category: "skirts"
            },

            {
                name: "Tank Top",
                price: 699,
                image: "/images/tanktop.jpg",
                category: "tops"
            }

        ]);

        console.log("Products Inserted ");
    }
}

// ============================
// API ROUTE
// ============================
app.get("/products", async (req, res) => {

    const products = await Product.find();

    res.json(products);

});
app.post("/add-product", async (req, res) => {
    try {
        console.log("DATA RECEIVED:", req.body);

        const product = new Product(req.body);
        await product.save();

        res.json({ message: "Product Added Successfully 👍" });

    } catch (err) {
        console.log(err);
        res.json({ message: "Error adding product" });
    }
});
// ============================
// SERVER START
// ============================
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});

