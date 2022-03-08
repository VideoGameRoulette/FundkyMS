require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');

const API = process.env.FUNDKY_URL || 'https://live.dev.fundky.com/en/api';
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require('./routes/fundky')(app);

app.listen(PORT, () => console.log('Fundky Microservice listening on http://localhost:' + PORT))