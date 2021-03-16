// acessar a pagina, inserir o texto no formulaŕio, fazer o download do arquivo de áudio e salvar em uma pasta 
// passar o caminho do texto via terminal 
// usar o puppeter, libs padrões do javascript e o ffmpeg

const puppeter = require('puppeteer');
const fs = require('fs');
var readlineSync = require('readline-sync');

// pega o caminho do arquivo usando o módeulo readline e passa pra uma váriavel

var caminho = readlineSync.question('caminho do documento: ');


