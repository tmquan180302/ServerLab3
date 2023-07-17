const express = require('express')

const app = express()

const port = 3000;

app.get('/getJsonObject', (req, res) => {
    res.send(`{
        "name" : "Ravi Tamada", 
        "email" : "ravi8x@gmail.com",
        "phone" : {
            "home" : "08947 000000",
            "mobile" : "9999999999"
        }
        
    }`)
})

app.get('/getJsonArray', (req, res) => {
    res.send(`[
        {
        "name" : "Ravi Tamada", 
        "email" : "ravi8x@gmail.com",
        "phone" : {
            "home" : "08947 000000",
            "mobile" : "9999999999"
        }
        },
        {
        "name" : "Tommy", 
        "email" : "tommy@gmail.com",
        "phone" : {
            "home" : "08946 000000",
            "mobile" : "0000000000"
        }
        }
    ]`)
})

app.listen(port, function (error) {
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})

