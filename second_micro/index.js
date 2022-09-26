// install express with `npm install express` 
const express = require('express')
const app = express()
const methodOverride =  require('method-override'); 
//*** / 
app.use(methodOverride('_method')); 

// app.get('/', (req, res) => res.send('Hello World!'))

// export 'app'
module.exports = app


// const express = require('express');
const mainRouter = require("./src/routes/index")
// const app = express()
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.urlencoded({extended: false}));




app.use("/", mainRouter)



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

