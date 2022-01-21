/* eslint-disable no-undef */
const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'nft-list.json'));
});

app.listen(port, () => {
    console.log(`[products] API listening on port ${port}.`);
});
