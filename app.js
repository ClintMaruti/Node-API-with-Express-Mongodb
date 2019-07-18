const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


// Listen to a http port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));