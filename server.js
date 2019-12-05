const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const itemsRoute = require('./routes/items');

app.use('/api/Items', itemsRoute);

//DB Connection
const db = 'mongodb://localhost:27017/BlacksmithDB';
mongoose.connect(db, {useNewUrlParser: true}, () => {
    console.log("Connected to DB!");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening to ${port}`);
})