const express = require('express');
const cors = require("cors")
const restaurantRouter = require("./routes/restaurant");

// create Server
const app = express();

// Use Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// app.use(methodOverride("_method"));

// Router
app.get('/', (req, res) => {
  res.send("<h1>This is Rastaurant API</h1>");
});

app.use("/", restaurantRouter);

//Running server
app.listen(5000, () => {
  console.log("Server Listening To part 5000");
});