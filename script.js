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

while(!itens.includes('sair')){
  let entrada = await perguntar(chalk.blue('Insira um item: '));
  itens.push(entrada.toLowerCase())
};

leia.close()
itens.pop();
itens.sort()
console.log("\nLista encerrada com sucesso!\n")
itens.forEach(itens => console.log(chalk.red(itens)));

