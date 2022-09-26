// install express with `npm install express` 
const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

const methodOverride =  require('method-override'); 
//*** / 
app.use(methodOverride('_method')); 

app.use(express.static("./public"));


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, './views'))


const mainRouter = require("./src/routes/index")
const userRoutes = require("./src/routes/userRoutes")
const productRoutes = require("./src/routes/productRoutes")




app.use("/", mainRouter)
app.use("/user", userRoutes)
app.use("/product", productRoutes)



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

