const express = require('express');
const path = require('path');

const app = express();

app.get('/diwali-2023', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/public/index.html'));
});

app.use(express.static(path.join(__dirname + '/public')));
const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`App started at port ${PORT}`);