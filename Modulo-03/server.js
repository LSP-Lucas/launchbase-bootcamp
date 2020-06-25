const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/11745960?s=460&u=41ee2ea5a18ab45724d8b87d63acdea2893d8c82&v=4",
        name: "Lucas Pedroso",
        role: "Estudante Full Stack",
        description: 'Cursando o Bootcamp LaunchBase da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/LSP-Lucas" },
            { name: "Linkdin", url: "https://www.linkedin.com/in/lucas-da-silva-pedroso-0b4420191/" }
        ]
    };

    return res.render("about", { about });
});

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos });
});

server.listen(5000, function() {
    console.log("O servidor está ativo");
});