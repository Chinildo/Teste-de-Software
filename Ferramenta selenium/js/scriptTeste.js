   (async function() {


       ///////////////////////////Grupo de casos de Teste analise do valor limite///////////////////////////

       //import casosDeTeste from './casosDeTeste.json';
       const casosDeTeste = require('./casosDeTeste.json');


       ////////////////////////// codigo principal ///////////////////////////
       const webdriver = require('selenium-webdriver');
       const driver = new webdriver.Builder().forBrowser('chrome').build();
       driver.get('http://127.0.0.1:8000/');
       const driverNota = driver.findElement(webdriver.By.id('nota'));
       const driverFrequencia = driver.findElement(webdriver.By.id('frequencia'));
       const driverVerificar = driver.findElement(webdriver.By.id('verificar'));
       const driverResultador = driver.findElement(webdriver.By.id('resultado'));
       const clean = driver.findElement(webdriver.By.id('clean'));
       testar(casosDeTeste, driver);

       //    let a = driverNota.sendKeys(80);

       //    console.log(a);
       //driverFrequencia.sendKeys(40);
       //    driverVerificar.click();
       //    setTimeout(() => { clean.click(); }, 2000);

       //    driverResultador.getAttribute('value').then((r) => {
       //        if (r === 'Aprovado') {
       //            console.log('Aprovado');
       //        } else if (r === 'Recuperacao') {
       //            console.log('recuperação');
       //        } else if (r === 'Reprovado') {
       //            console.log('reprovado');
       //        }
       //    });










       //////////////////////////////Funcoes////////////////////////////////////

       function testar(casosDeTeste, d) {
           let indice;
           indice = 0;
           var intervalo = setInterval(() => {
               if (indice > 19) {
                   clearInterval(intervalo);
                   d.quit();
                   return;
               }
               verificarTesteAux(casosDeTeste[indice].nota, casosDeTeste[indice].freq, casosDeTeste[indice].resultEsperado, indice);
               indice++;
           }, 5000);

       }



       //    function verificarTesteAux(nota, freq, resultEs, ind) {
       //        driverNota.sendKeys(nota);
       //        driverFrequencia.sendKeys(freq);
       //        setTimeout(() => {
       //            driverVerificar.click();
       //            driverResultador.getAttribute('value').then((r) => {
       //                if (r === resultEs) {
       //                    console.log('No indice ' + ind + ' Passou no teste');
       //                } else {
       //                    console.log('No indice ' + ind + ' Teste falhou');
       //                }
       //            });
       //        }, 1000);

       //    }

       function verificarTesteAux(nota, freq, resultEs, ind) {
           driverNota.sendKeys(nota);
           driverFrequencia.sendKeys(freq);
           setTimeout(() => {
               driverVerificar.click();
               driverResultador.getAttribute('value').then((r) => {
                   if (r === resultEs) {
                       console.log('No indice ' + ind + ' Passou no teste');
                   } else {
                       console.log('No indice ' + ind + ' Teste falhou');
                   }
               });
           }, 1000);
           setTimeout(() => { clean.click(); }, 3000);
       }
   })();