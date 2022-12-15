import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getContenidoPage(){
    return element(by.css('app-root .tituloIni')).getText();
  }
  getContenidoForm(){
    return element(by.css('app-root form')).getText();
  }
  getContenidoForm2(){
    return element(by.css('app-root form')).getText();
  }
  getContenidoButton1(){
    return element(by.css('app-root ion-button')).getText();
  }
  getContenidoButton2(){
    return element(by.css('app-root ion-footer')).getText();
  }
}
