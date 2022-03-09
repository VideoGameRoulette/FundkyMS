const axios = require('axios');

module.exports = (app) => {
    const API = process.env.FUNDKY_URL || 'https://live.dev.fundky.com/en/api';

    app.get('/api/polls/:id', async (req, res) => {
        try {
            const polls = await axios({
                method: 'get',
                url: `${API}/clanfight/list/${req.params.id}?showOptionsCount=true&showDescription=true&showOptions=true`,
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

    app.get('/api/milestones/:id', async (req, res) => {
        try {
            const milestones = await axios({
                method: 'get',
                url: `${API}/incentives/list/${req.params.id}`,
                responseType: 'json',
            }).then(response => {
                res.json({ milestones: response.data.results });
            });
        }
        catch (error) {
            console.error(error.message);
        }
    });

    app.get('/api/donations/total/:id', async (req, res) => {
        try {
            const donations = await axios({
                method: 'get',
                url: `${API}/donations/sum/${req.params.id}`,
                responseType: 'json',
            }).then(response => {
                res.json({ current: response.data });
            });
        }
        catch (error) {
            console.error(error.message);
        }
    });

    app.get('/api/donations/list/:id', async (req, res) => {
        try {
            const donations = await axios({
                method: 'get',
                url: `${API}/donations/list/${req.params.id}?showAnonymous=true`,
                responseType: 'json',
            }).then(response => {
                res.json({ donations: response.data.results || [] });
            });
        }
        catch (error) {
            console.error(error.message);
        }
    });
};