const sql = require("./db");
//Constructor
const Restaurant = (restaurant) => {
  //Attributes
  this.id = restaurant.id;
  this.name = restaurant.name;
  this.type = restaurant.type;
  this.imgeurl = restaurant.imgeurl;
};

//Method
Restaurant.create = (newRestaurant, result) => {
  sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res)=>{
    if(err){
      console.log("error", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertID, ...newRestaurant });
  } )
};

// Get Data by Id
Restaurant.getById = (restaurantId, result) => {
  // SELECT * FROM restaurants WHERE id = restaurantId
  sql.query(
    `SELECT * FROM restaurants WHERE id = ${restaurantId}`,
  (err, res) =>{
    if(err) {
      console.log("error: ",err);
      result(err, null);
      return;
    }
    if(res.length){
      result(null, res[0]);
      return;
    }

    result({kind: "not_found"}, null);
  }
  )
}
Restaurant.getAll = () => {};
Restaurant.updateById = () => {};
Restaurant.removeById = () => {};
Restaurant.removeAll = () => {};

module.exports = Restaurant;