const express = require('express');
const server = express();

server.get("/", function(req, res) {
    return res.send("Olá!!!!!");
});

server.listen(5000, function() {
    console.log("O servidor está ativo");
});