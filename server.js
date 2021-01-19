const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Open weather API"});
});

app.get('/weather/all', (req, res) => {
    console.log("inside getAll");
    // call the open weather api by request

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e851c3a06fd5f139e2d886a778ca574f')
        .then(response => {
            console.log(response.data.base);
            //res.send(response.data)
          axios.get('https://api.yelp.com/v3/businesses/search?location='+response.data.name, {
              headers: {
                  'Authorization': 'jSnI84nLQxQ_1HNCOEk08Ino1-jKh6263zVWWUfPTerU96v2xSz5nLToE84oP4xJtifhXSYQCbdz6pZ6_EDfMLbJIMWqctWe-c9m2TGim1JrAefFwkUjaO_8NVoHYHYx'
              }
          })
                .then(response1 => {
                    res.send(response1.data)
                })
                .catch(error1 => {
                    console.log(error1);
                });
        })
        .catch(error => {
            console.log(error);
        });


});
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});