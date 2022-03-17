require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require('./routes/fundky')(app);

app.listen(PORT, () => console.log('Fundky Backend listening on http://localhost:' + PORT))