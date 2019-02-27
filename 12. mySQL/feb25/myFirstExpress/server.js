const express = require('express');
const app = express();
const port = 3000;

app.get('/home', function(req, res) {
    res.send("WHAT'S CRACKIN?!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

