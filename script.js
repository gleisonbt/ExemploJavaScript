/*
        Declarando variáveis
        var nome = 'Gleison';
        var idade;
        idade = 29; //isso é um comentário
        var peso = 61.4

        alert("Hello Word! " + nome + " Sua idade é: " + idade);
        alert("Peso: " + peso); // + -> operador de  concatenacao
        alert(10 + 4);*/
        function exibirAlerta(){
            alert("Eiiiiee povo!"); //Saída
        }   
        function soma(){
            var a = parseInt(prompt("Informe um valor: ")); //Entrada
            var b = parseInt(prompt("Informe um valor: ")); //parseInt -> converte para inteiro
            var soma = a + b;

            alert(soma) ;
        }

        function imc(){
            var peso;
            var altura;

            peso = parseFloat(prompt("Informe o peso: "));
            altura = parseFloat(prompt("Informe a altura: "));

            var imc = peso/(altura * altura);

            alert("Seu imc é: " + imc);
        }

        function eMaior(){
            var idade = parseInt(prompt("Informe sua idade: "))

            if (idade > 17) {
                alert('Maior de idade');
            } else {
                alert('Menor de idade');
            }
        }

        function tipoFruta(){
            var fruta = prompt('Informe uma fruta: ');

            switch (fruta) {
                case 'laranja':
                    alert('Cítrica!');
                    break;
                case 'mamao':
                    alert('Doce!');
                    break;
                case 'limao':
                    alert('Cítrica!');
                    break;
                default:
                    alert('Fruta não cadastrada');
                    break;  
            }
        }

        function contaAte10(){
            var num = 0;
            while (num < 11) {
                alert(num);
                num++; // num = num + 1
            }
        }

        function contaAte10_2(){
            var num = 0;
            do {
                alert(num);
                num++;
            } while (num < 11);
            //no while é feito o teste antes
            //de executar o bloco de código
            //isto é,desde a primeira iteração
            //já no do..while, a primeira interação
            //não é testada
        }

        function desejaContinuar(){
            var resposta;

            do {
                soma();

                resposta = prompt('Deseja continuar?');
            } while (resposta == "sim");
        }

        function contaAte10_3() {
            for(var num = 0;num < 11; num++){
                alert(num);
            }
        }

        function calculadora(){
            var operacao = prompt("Desja fazer qual operação? ");
            var num1 = parseFloat(prompt("Informe o primeiro numero: "));
            var num2 = parseFloat(prompt("Informe o segundo numero: "));

            if (operacao == 'soma') {
                alert(num1 + num2);
            } else {
              if (operacao == 'subtracao') {
                alert(num1 - num2);
              } else {
                if (operacao == 'multiplicacao') {
                    alert(num1 * num2);
                } else {
                    if (operacao == 'divisao') {
                        alert(num1/num2);
                    } else {
                        alert('opeacao invalida');
                    }
                }
              }  
            }
        }

        function calculadora2(){
            var operacao = prompt("Deseja fazer qual operação? ");
            var num1 = parseFloat(prompt("Informe o primeiro numero: "));
            var num2 = parseFloat(prompt("Informe o segundo numero: "));

            switch (operacao) {
                case 'soma':
                    alert(num1 + num2);
                    break;
                case 'subtracao':
                    alert(num1 - num2);
                    break;
                case 'multiplicacao':
                    alert(num1 * num2);
                    break;
                case 'divisao':
                    alert(num1/num2);
                default:
                    alert('Operação Inválida');
                    break;
            }
        }

    
        function vetor(){
            var vetorNum = [1,2,3];
            /*
            1. inicia o contador
            2. condição de parada
            3. incremento do contador
            */
            var soma = 0;
            for(var cont = 0; cont < vetorNum.length; cont++){
                soma += vetorNum[cont];
            }

            alert('soma de ' + vetorNum.length + ' elementos: ' + soma);
        }

        function lerVetor(){
            var vetor = [];
            do {
                var valor = parseInt(prompt("Informe um valor: "));
                vetor.push(valor);    
            } while (valor != -1);
        

            return vetor;
        }

        function ultimaPosicaoVetor(){
            var a = lerVetor();

            alert(a[a.length - 2]);
        }

        function tabuada7(){
            var cont = 0;//variavel contadora
            while(cont < 11){
               var multiplicacao = 7*cont;
               alert('7 x '+ cont + ' = ' + multiplicacao);
               cont++;
            }
        }


        function tabuada(valor){
            //tabuada generica usando DO...WHILE

            var cont=0;
            do{
                var multiplicacao = cont*valor;
                alert(valor+' x '+cont +' = '+ multiplicacao);
                cont++; 
            }while( cont <11);
        }

        function testaTabuada(){
            tabuada(parseInt(prompt('Informe um valor: ')));
        }


        function exibeFrutas(){
            var frutas =["manga", "maça", "laranja"];
            for (var cont=0;cont<frutas.length;cont++){
                alert(frutas[cont]);
            }            
        }

        function inverteVetor(vetor){
            var vetorInvertido = [];

            for(var cont = vetor.length - 1; cont > -1; cont--){
                vetorInvertido.push(vetor[cont]);
            }

            return vetorInvertido;
        }

        function testeInverteVetor(){
            var vetor = ["banana","maça","pera"];
            var vetorInvertido = inverteVetor(vetor);
            for(var cont = 0; cont < vetor.length;cont++){
                alert(vetorInvertido[cont]);
            }
        }

        function testeInverteVetor2(){
            var vetor = ["banana","maça","pera"];
            vetor.reverse();
            for(var cont = 0; cont < vetor.length; cont++){
                alert(vetor[cont]);
            }
        }

        function alteraValorH1(){
            //var valorTag = document.getElementById("titulo").innerHTML;
            //alert(valorTag);
            document.getElementById("titulo").innerHTML = "Cabeçalho Alterado!";
        }

        function criarTagH2(){
            var cabecalho2 = document.createElement("h2");
            cabecalho2.setAttribute("id","cabecalho2");
            document.getElementsByTagName("body")[0].appendChild(cabecalho2);
            document.getElementById("cabecalho2").innerHTML = "relou :)";
        }