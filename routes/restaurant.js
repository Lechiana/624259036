const express = require("express");
const router = express.Router();
const restaurants = require("../database");

// http://localhost:5000/apis/restaurants
router.post("/apis/restaurants", (req, res ) => {
  const newRestaurant = {
    ...req.body,
  };
  restaurants.push(newRestaurant)
  res.json(newRestaurant);
});

// http://localhost:5000/apis/restaurants
router.get("/apis/restaurants", (req, res ) => {
  res.json(restaurants);
});

// Get restaurants by ID
// http://localhost:5000/apis/restaurants/1
router.get("/apis/restaurants/:id", (req, res ) => {
  const restaurantId = Number.parseInt(req.params.id);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );
  res.json(restaurant);
});

// http://localhost:5000/apis/restaurants/1
router.put("/apis/restaurants/:id", (req, res ) => {
  const restaurantId = Number.parseInt(req.params.id);
  const index = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );
  const newRestaurant = {
    id: restaurantId,
    name: req.body.name,
    type: req.body.type,
    imageurl: req.body.imageurl,
  };
  restaurants[index] = newRestaurant;
  res.json(newRestaurant);
});

// http://localhost:5000/apis/restaurants/1
router.delete("/apis/restaurants/:id", (req, res ) => {
  const restaurantId = Number.parseInt(req.params.id);
  const index = restaurants.findIndex(
    (restaurant) => restaurant.id === restaurantId
  );
  restaurants.splice(index, 1);
  const message = {
    text: "Restaurant deleted",
    id: restaurantId,
    status: 204,
  };
  res.json(message);
  // res.sendStatus(204);
});


// http://localhost:5000/apis/restaurants
router.post("/restaurants", (req, res ) => { 
});

// http://localhost:5000/apis/restaurants
router.get("/restaurants/:id", (req, res ) => { 
  const restaurantId = Number.parseInt(req.params.id);
  Restaurant.getById(restaurantId, (err, data)=>{
    if(err){
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Restaurant not found with this id ${restaurantId}`,
        });
      }
      else{
        res.sendStatus(500).send({
          message: "Error retrieving whit this id " + restaurantId,
        })
      }
    } else {
      res.send(data);
    }
  })
});



module.exports = router;