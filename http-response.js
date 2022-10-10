import fetch from "node-fetch";

async function status(links) {
    const arrayStatus = await Promise.all(links.map(async (link) => {
        const response = await fetch(link);
        return response.status;
    }))
    return arrayStatus;
}

function geraLinks (arrayConsole){
    const links = arrayConsole.map((objeto) => Object.values(objeto).join());
    return links;
}


export async function validaLinks(arrayLinks) {
    const links = geraLinks(arrayLinks);
    const linkStatus = await status(links);
    const log = arrayLinks.map((objeto, index) => ({
        ...objeto,
        status: linkStatus[index]}))
    return log;
}