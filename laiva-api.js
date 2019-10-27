const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mahdollisetPaikat = [ // Vaakasuunnassa olevat
                         [1, 2, 3 ], [2 ,3 ,4 ], [3, 4, 5],
                         [6, 7, 8 ], [7, 8, 9 ], [8, 9, 10],
                         [11,12,13], [12,13,14], [13,14,15],
                         [16,17,18], [17,18,19], [18,19,20],
                         [21,22,23], [22,23,24], [23,24,25],
                          // Pystysuunnassa olevat
                         [1,6,11], [6,11,16], [11,16,21],
                         [2,7,12], [7,12,17], [12,17,22],
                         [3,8,13], [8,13,18], [13,18,23],
                         [4,9,14], [9,14,19], [14,19,24],
                         [5,10,15], [10,15,20], [15,20,25]
                        ];

// Lähetetään satunnaiset koordinaatit
app.get("/laiva-api/random", (req,res) => {
    var random = mahdollisetPaikat[Math.floor(Math.random() * mahdollisetPaikat.length)]
    res.send(random);
})

app.listen(3000, "localhost", (req, res) => {
    console.log("Listening to port 3000");
})