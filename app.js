const express = require("express");
const app = express();
const path = require("path"); 
app.use(express.static('public'));
app.use(do_this)
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Home.html"))
});




function do_this( req , res ,next){
  var now = new Date();
  var currentHour = now.getHours();
  const currentdate = now.getDay();
  if(currentdate >= 1 && currentdate <= 6 && currentHour >= 9 && currentHour <= 17 ) {

next()


  }
  
 
}


const port = 3000;
app.listen(port, () => console.log(`server 1 run on ${port}`));
