const app =require("./src/app")
const connectToDB = require("./src/config/database")
require('dotenv').config();
connectToDB();


app.listen(3000,(req, res)=>{
  console.log("server Running...");
})