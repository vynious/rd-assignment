// import express, { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const app = express();
// const JWT_SECRET = '1231wdft34t34wedw';

// // middleware to protect routes
// const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, JWT_SECRET, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

// // Example protected route
// app.get('/protected', authenticateJWT, (req, res) => {
//     res.send('Protected data');
// });
