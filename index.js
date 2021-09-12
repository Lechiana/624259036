const express = require('express');
const restaurantRouter = require("./routes/restaurant");

// create Server
const app = express();

// Use Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Router
app.get('/', (req, res) => {
  res.send("<h1>This is Rastaurant API</h1>");
});

app.use("/", restaurantRouter);

//Running server
app.listen(5000, () => {
  console.log("Server Listening To part 5000");
});