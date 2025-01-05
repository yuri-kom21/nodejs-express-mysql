const express = require('express');
const cors = require('cors');
const app = express();

var corseOptions = {
    origin: 'http://localhost:8081'
};
app.use(cors(corseOptions));

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

require("./app/routes/tutorial.routes.js")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});