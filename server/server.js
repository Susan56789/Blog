const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());
app.use(express.urlencoded());


app.listen(8000, () =>{
    console.log("Server is started and listening")
})

//REST API Call
app.get("/",async (req, res)=>{
res.send("Hello Node,js !");
});