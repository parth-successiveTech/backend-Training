const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

const secret_key = 'dunnykey';

app.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'cr7ronaldo'
    };

    const token = jwt.sign(user, secret_key, { expiresIn: '1h' });
    res.json({ token });
});


app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'this is protected route', user: req.user });
});


const port = 3000;
app.listen(port, () => console.log("running question6 server on port", port));
