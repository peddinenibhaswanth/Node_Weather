const express = require('express');
const path = require('path');

const app = express();
const weatherData = require('../utils/weatherData');


const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set("view engine", 'ejs');
app.set('views', viewsPath);
app.use(express.static(publicPath));


const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
    res.render("index",{
        title: "Weather App",
    });
});

app.get("/weather", (req, res) => {
    if(!req.query.address) {
        return res.send("Address is required to get weather data");
    }
    weatherData(req.query.address, (error, data) => {
        if(error){
            return res.send(error);
        }
        res.send(data);
    })
});

// app.get("/*", (_req, res) => {
//     res.render("404",{title: "404 Not Found", errorMessage: "Page not found"});
// });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
