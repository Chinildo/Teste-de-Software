   (function() {


       ///////////////////////////Grupo de casos de Teste analise do valor limite///////////////////////////
       const casosDeTeste = [
           valorDeTeste1 = { nota: 61, freq: 76, resultEsperado: 'aprovado' },
           valorDeTeste2 = { nota: 61, freq: 75, resultEsperado: 'recuperacao' },
           valorDeTeste3 = { nota: 61, freq: 50, resultEsperado: 'recuperacao' },
           valorDeTeste4 = { nota: 61, freq: 49, resultEsperado: 'reprovado' },
           valorDeTeste5 = { nota: 60, freq: 76, resultEsperado: 'aprovado' },
           valorDeTeste6 = { nota: 60, freq: 75, resultEsperado: 'recuperacao' },
           valorDeTeste7 = { nota: 60, freq: 50, resultEsperado: 'recuperacao' },
           valorDeTeste8 = { nota: 60, freq: 49, resultEsperado: 'reprovado' },
           valorDeTeste9 = { nota: 59, freq: 76, resultEsperado: 'recuperacao' },
           valorDeTeste10 = { nota: 59, freq: 75, resultEsperado: 'recuperacao' },
           valorDeTeste11 = { nota: 59, freq: 50, resultEsperado: 'recuperacao' },
           valorDeTeste12 = { nota: 59, freq: 49, resultEsperado: 'reprovado' },
           valorDeTeste13 = { nota: 40, freq: 76, resultEsperado: 'recuperacao' },
           valorDeTeste14 = { nota: 40, freq: 75, resultEsperado: 'recuperacao' },
           valorDeTeste15 = { nota: 40, freq: 50, resultEsperado: 'recuperacao' },
           valorDeTeste16 = { nota: 40, freq: 49, resultEsperado: 'reprovado' },
           valorDeTeste17 = { nota: 39, freq: 76, resultEsperado: 'reprovado' },
           valorDeTeste18 = { nota: 39, freq: 75, resultEsperado: 'reprovado' },
           valorDeTeste19 = { nota: 39, freq: 50, resultEsperado: 'reprovado' },
           valorDeTeste20 = { nota: 39, freq: 49, resultEsperado: 'reprovado' }
       ];



       const resultadosTeste = [];
       let indiceResultados = 0;





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

       //    driverNota.sendKeys(80);
       //    driverFrequencia.sendKeys(40);
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
           let nota, freq, resultEsp, elemento, indice;
           indice = 0;
           var intervalo = setInterval(() => {
               if (indice > 19) {
                   clearInterval(intervalo);
                   d.quit();
                   return;
               }
               elemento = casosDeTeste[indice];
               nota = elemento.nota;
               freq = elemento.freq;
               resultEsp = elemento.resultEsperado;
               verificarTesteAux(nota, freq, resultEsp, indice);
               indice++;
               setTimeout(() => { clean.click(); }, 3000);
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
       }
   })();