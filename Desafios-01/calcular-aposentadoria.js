const nome = 'Jaira';
const sexo = 'F';
const idade = 60;
const contribuicao = 20;

const totalAnos = idade + contribuicao;

let homemAposentado = false;
let mulherAposentada = false;

if(contribuicao >= 35 && sexo == 'M' && totalAnos >= 95) {
    homemAposentado = true;
}

if(contribuicao >= 30 && sexo == 'F' && totalAnos >= 85) {
    mulherAposentada = true;
}

if (homemAposentado || mulherAposentada) {
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}