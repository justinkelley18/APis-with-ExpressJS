const express = require('express');
const chirpsStore = require('../chirpsstore')
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpsStore.Get(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;
    if (id) {
        res.json(chirpStore.updateChirp(id, chirp));
    } else {
        res.sendStatus(200)
    }
});

router.delete('/', (req, res) => {
    let id = req.params.id;
    res.json(chirpStore.deleteChirp(id, chirp));
    res.send('')
});

module.exports = router;