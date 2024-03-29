const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Test route
app.get('/', (req,res) => {
    res.send('Hey there!!!');
});

// ROUTES - posts
const postsRoutes = require('./routes/posts');
app.use(postsRoutes);


// Connect to Mongodb
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to the database successfully!')
);

// Listen to a http port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));