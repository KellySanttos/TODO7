import chalk from 'chalk';
import readline from 'readline';


let itens = []

const leia = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve, reject) => {
      leia.question(pergunta,(entrada) => {
        resolve(entrada)
      })
  })
}



