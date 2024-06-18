//Solicita o número de vitórias e derrotaS ao usuário 
const vitorias = ("10");
const derrotas = ("5");

function calcularNivel(vitorias, derrotas){
      const saldoVitorias = 10 - 5 

      let nivel;

      if (saldoVitorias >= 10){
        nivel = "Ferro";
      }else if (saldoVitorias >=11 && saldoVitorias <=20){
        nivel = "Bronze";
      }else if (saldoVitorias >= 21 && saldoVitorias <=50){
        nivel = "Prata";
      }else if (saldoVitorias >= 51 && saldoVitorias <=80){
        nivel = "Ouro";
      }else if (saldoVitorias >= 81 && saldoVitorias <=90){
        nivel = "Diamante";
      }else if (saldoVitorias >=91 && saldoVitorias <=100){
        nivel = "Lendário";
      }else {
        nivel = "Imortal"
      }

      //Retornar o resultado
      return ("O Herói tem saldo de "    + ( vitorias) +  " vitórias e está no nivel de "  + (nivel) );

}

const resultado = calcularNivel(vitorias,derrotas);
console.log(resultado);
