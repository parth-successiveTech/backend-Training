import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "parth", email: "parthy599@gmail.com" }];

app.get('/api/users', (req: Request, res: Response) => {
    res.json(users);
});
