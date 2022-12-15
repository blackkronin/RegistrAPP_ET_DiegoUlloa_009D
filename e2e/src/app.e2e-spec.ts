import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('Ejecutando Pruebas de REGISTRAPP', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1 // Deberia mostrar contenido de page',  () => {
    page.navigateTo();
    expect( page.getContenidoPage()).toContain('Registr APP');
  });
  it('Prueba 2 // Deberia mostrar contenido de page', () => {
    page.navigateTo();
    expect( page.getContenidoForm()).toContain('Correo');
  });
  it('Prueba 3 // Deberia mostrar contenido de page', () => {
    page.navigateTo();
    expect( page.getContenidoForm2()).toContain('Contraseña');
  });
  it('Prueba 4 // Deberia mostrar contenido de page', () => {
    page.navigateTo();
    expect( page.getContenidoButton1()).toContain('Ingresar');
  });
  it('Prueba 5 // Deberia mostrar contenido de footer', () => {
    page.navigateTo();
    expect( page.getContenidoButton2()).toContain('Registrarse');
  });
});
