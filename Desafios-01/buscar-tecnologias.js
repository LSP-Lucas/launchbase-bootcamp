const usuarios = [
    {
        nome: "Lucas",
        tecnologias: ["HTML", "CSS", "Javascript"]
    },
    {
        nome: "Larissa",
        tecnologias: ["Java", "SQL", "CSS"]
    },
    {
        nome: "Rosa",
        tecnologias: ["CSS", "React", "React-native"]
    }
];

function checaSeUsuarioUsaCSS(usuario) {
    for(let i = 0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == 'CSS'){
            return true;
        }
    }
    return false;
}

for(let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`);
    }
}