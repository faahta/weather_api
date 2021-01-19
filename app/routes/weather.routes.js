module.exports = (app) => {
    const weathers = require('../controllers/weather.controller.js');

    // Create a new Note
    app.get('/weather/all', weathers.getAll());

}