const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.getAll = (req, res) => {
    console.log("inside getAll");
 // call the open weather api by request
    return request('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e851c3a06fd5f139e2d886a778ca574f', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    });
};
