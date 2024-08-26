const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API.");
});

mongoose
  .connect(
    "mongodb+srv://admin:FDNGvOt1qvKvf4TJ@backenddb.ecnxz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Servidor ligado na porta 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
