let btnCalcular = document.getElementById('calcular')

function calculo(){
    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');

    if(peso != "" && altura != ""){
        var calcImc = peso / (altura * altura);
        var calcPesoIdealInitial = 18.5 * (altura *altura);
        var pesoIdealMin = calcPesoIdealInitial.toFixed(2);
        var calcPesoIdealFinish = 24.9 * (altura *altura);
        var pesoIdealMax = calcPesoIdealFinish.toFixed(2);
        var imc = calcImc.toFixed(2);
        let msg = "";
        if (imc < 18.5){
            msg = 'abaixo do peso'
        } else if (imc >= 18.5 && imc <= 24.9){
            msg = 'com peso normal'
        }else if (imc >= 25 && imc <= 29.9){
            msg = 'com sobrepeso'
        }else if (imc >= 30 && imc <= 34.9){
            msg = 'com obesidade grau I'
        }else if (imc >= 35 && imc <= 39.9){
            msg = 'com obesidade grau II'
        }else {
            msg= 'com obesidade mórbida'
        }
        
        resultado.innerHTML = `Prazer ${nome}, seu IMC é: ${imc}, você está ${msg}. Seu peso ideal seria entre ${pesoIdealMin} Kg e ${pesoIdealMax} Kg.`
    }

    else{
        
        resultado.innerHTML = 'Preencha todos os campos'
    }
    event.preventDefault()
}
btnCalcular.addEventListener('click' , calculo);