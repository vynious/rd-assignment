import express, { Request, Response, NextFunction } from 'express';

const app = express();

// List of allowed IP addresses
const whitelist = ['123.456.789.000', '111.222.333.444'];

const ipWhitelistMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const clientIp = req.ip;
    
    if (whitelist.includes(clientIp)) {
        next();
    } else {
        res.status(403).send('Access denied.');
    }
};

app.use(ipWhitelistMiddleware);

app.get('/', (req, res) => {
    res.send('IP is whitelisted!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
