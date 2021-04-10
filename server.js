const fs = require('fs');
const key = fs.readFileSync('cert/key.pem');
const cert = fs.readFileSync('cert/cert.pem');
const path = require('path');

const express = require('express');
const https = require('https');
const app = express();

const server = https.createServer({ key: key, cert: cert }, app);
app.use(express.static(path.join(__dirname, '/')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/image.html'));
});
server.listen(3001, () => { console.log('listening on 3001') });