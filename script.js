

const calcular = document.getElementById('calcular');


// nome.value = "Johnny";
// idade.value = "35";
// altura.value = "1.79";
// peso.value = "89";

function imc() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if (nome && idade && altura && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1)
        let valorTabela = '';

        if (valorIMC < 18.5) {
            valorTabela = 'abaixo do peso';
        } else if (valorIMC < 25) {
            valorTabela = 'com peso ideal, parabéns!!!';
        } else if (valorIMC < 30) {
            valorTabela = 'um pouquinho acima do peso. É bom começar a se cuidar!';
        } else if (valorIMC < 35) {
            valorTabela = 'acima do peso, você entrou em obesidade grau I. Cuide-se!!!'
        } else if (valorIMC < 40) {
            valorTabela = 'mais que acima do peso, você entro em obesidade  grau II. Cuide-se!!!'
        }
        else {
            valorTabela = 'muito acima do peso, vc é obeso grau III. Vamos procurar ajuda!!!'
        }

        resultado.textContent = `Olá ${nome} você tem: ${idade} anos de idade, com base na sua altura de ${altura} e no seu peso ${peso} calculo que vc esta ${valorTabela}`;


    } else {
        resultado.textContent = 'Preencha todos os campos';
    }


}
    calcular.addEventListener('click', imc);


