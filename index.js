require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/polls/:id', async (req, res) => {
    try {
        const polls = await axios({
            method: 'get',
            url: `https://live.dev.fundky.com/en/api/clanfight/list/${req.params.id}?showOptionsCount=true&showDescription=true&showOptions=true`,
            responseType: 'json',
        }).then(response => {
            console.log(response);
            res.json({ polls: response.data.results || [] });
        });
    }
    catch (error) {
        console.error(error.message);
    }
});

app.get('/milestones/:id', async (req, res) => {
    try {
        const milestones = await axios({
            method: 'get',
            url: `https://live.dev.fundky.com/en/api/incentives/list/${req.params.id}`,
            responseType: 'json',
        }).then(response => {
            res.json({ milestones: response.data.results });
        });
    }
    catch (error) {
        console.error(error.message);
    }
});

app.get('/donations/total/:id', async (req, res) => {
    try {
        const donations = await axios({
            method: 'get',
            url: `https://live.dev.fundky.com/en/api/donations/sum/${req.params.id}`,
            responseType: 'json',
        }).then(response => {
            res.json({ current: response.data });
        });
    }
    catch (error) {
        console.error(error.message);
    }
});

app.get('/donations/list/:id', async (req, res) => {
    try {
        const donations = await axios({
            method: 'get',
            url: `https://live.dev.fundky.com/en/api/donations/list/${req.params.id}?showAnonymous=true`,
            responseType: 'json',
        }).then(response => {
            res.json({ donations: response.data.results || [] });
        });
    }
    catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, () => console.log('Fundky Microservice listening on http://localhost:' + PORT))