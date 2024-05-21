const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let lastMessage = '';

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const message = req.body.events[0].message.text;
    lastMessage = message;
    res.sendStatus(200);
});

app.get('/get_message', (req, res) => {
    res.json({ message: lastMessage });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
