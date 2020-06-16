const usuario = {
    nome: "Lucas",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
};

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, N° ${usuario.empresa.endereco.numero}`);
console.log(`O usuário ${usuario.nome} trabalha na empresa ${usuario.empresa.nome}`);


// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260