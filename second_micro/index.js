// install express with `npm install express` 
const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))

// export 'app'
module.exports = app


// const express = require('express');
const mainRouter = require("./src/routes/index")
// const app = express()
const port = 3000;


app.use(express.static("./public"));

app.set("view engine", "ejs");


app.use("/", mainRouter)



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})

