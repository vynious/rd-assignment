import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();

// read SSL certificate and key files
const privateKey = fs.readFileSync('private_key.pem', 'utf8');
const certificate = fs.readFileSync('certificate.pem', 'utf8');
const ca = fs.readFileSync('ca.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate, ca: ca };
const httpsServer = https.createServer(credentials, app);

app.get('/', (req, res) => {
    res.send('Hello, HTTPS world!');
});

httpsServer.listen(443, () => {
    console.log('HTTPS server running on port 443');
});
