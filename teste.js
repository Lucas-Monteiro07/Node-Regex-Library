import chalk from 'chalk';
import * as fs from 'fs';
import { Module } from 'module';

function trataErro(erro){
    throw new Error(chalk.red(erro));
}

export async function leArquivo(filePath){
    const encoding = 'utf8';
    try {
        const data = await fs.promises.readFile(filePath, encoding);
        return extraiLinks(data);
    } catch (e) {
        trataErro(e);
    }
}

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const links = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        links.push({ [temp[1]]: temp[2]})
    }
    return links;
}

// *** função utilizando .then e .catch ***
// function leArquivo(filePath){
//     const encoding = 'utf-8'
//     fs.promises.readFile(filePath, encoding)
//     .then((data) => {console.log(data);})
//     .catch((erro) => {trataErro(erro)})
// }


leArquivo('./arquivos/texto1.md')