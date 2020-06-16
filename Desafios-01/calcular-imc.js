const nome = 'Lucas';
const peso = 80;
const altura = 1.82;
let classificacao;
let grau_obs;

const imc = peso / ( altura * altura );

if(imc < 18.5) {
    classificacao = 'Magreza';
    grau_obs = 0;

} else if(imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Normal';
    grau_obs = 0;

} else if(imc >= 25.0 && imc <= 29.9) {
    classificacao = 'Sobrepeso';
    grau_obs = 'I';

} else if(imc >= 30.0 && imc <= 39.9) {
    classificacao = 'Obesidade';
    grau_obs = 'II';

} else {
    classificacao = 'Obesidade Grave';
    grau_obs = 'III';
}

console.log(`Seu IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
console.log(`Grau de Obesidade: ${grau_obs}`);
