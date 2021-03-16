// acessar a pagina, inserir o texto no formulaŕio, fazer o download do arquivo de áudio e salvar em uma pasta 
// passar o caminho do texto via terminal 
// usar o puppeter, libs padrões do javascript e o ffmpeg

const puppeteer = require('puppeteer');
const fs = require('fs');
var readlineSync = require('readline-sync');

// pega o caminho do arquivo usando o módeulo readline e passa pra uma váriavel

// var caminho = readlineSync.question('caminho do documento: ');


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://ttsmp3.com/');

    await page.click('');

    // await browser.close();
})();