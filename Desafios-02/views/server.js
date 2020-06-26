const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const contents = require("../data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get("/", function(req, res) {

    const index = {
        comunidade: "https://discordapp.com/invite/gCRAFhc",
        name: "Comunidade",
        header: [
            { name: "Email", url: "mailto:oi@rocketseat.com.br" },
            { name: "Telefone", url: "tel:+5547992078767" },
            { name: "Conteúdos", url: "/conteudos" },
            { name: "Sobre", url: "/sobre" }
        ],
        title: "As mesmas tecnologias utilizadas por empresas como:",
        users: "Nubank, Netflix, Uber, Instagram e Airbnb",
        description: "Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores.",
        redes: "Siga-nos nas redes sociais",
        links: [
            { name: "Github", url: "https://github.com/Rocketseat", img: "img/logotipo.svg" },
            { name: "Facebook", url: "http://fb.com/rocketseat", img: "img/facebook.svg" },
            { name: "Instagram", url: "http://instagram.com/rocketseat_oficial", img: "img/instagram-esbocado.svg" }
        ]
    };

    return res.render("index", { index });
});

server.get("/conteudos", function(req, res) {
    return res.render("conteudos", { items: contents });
});

server.get("/sobre", function(req, res) {

    const sobre = {
        title: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        tecBases: [
            { name: "HTML5" }, { name: "CSS" }, { name: "Javascript" }
        ],
        tecAvancadas: [
            { name: "Node.js" }, { name: "React" }, { name: "React Native" }
        ],
        redes: "Siga-nos nas redes sociais",
        links: [
            { name: "Github", url: "https://github.com/Rocketseat", img: "img/logotipo.svg" },
            { name: "Facebook", url: "http://fb.com/rocketseat", img: "img/facebook.svg" },
            { name: "Instagram", url: "http://instagram.com/rocketseat_oficial", img: "img/instagram-esbocado.svg" }
        ]
    }

    return res.render("sobre", { sobre });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
});


server.listen(5000, function() {
    console.log("O servidor ouviu");
});