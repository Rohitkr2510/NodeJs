const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
    res.send("<h1>This is user</h1>");

});

app.use('/', (req,res,next) => {
    res.send("<h1>This is from the Homepage");
})

app.listen(3000);