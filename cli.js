import { leArquivo } from './teste.js';
import { validaLinks } from './http-response.js';
import chalk from 'chalk';

const caminho = process.argv;

async function processaTexto(caminhoArquivo) {
    const resultado = await leArquivo(caminhoArquivo[2]);
    if (caminhoArquivo[3] === 'validar') {
        console.log(chalk.green('Links Válidos: '), await validaLinks(resultado));
    } else {
        console.log(chalk.yellow('Links: '), resultado);
    }

}

processaTexto(caminho);