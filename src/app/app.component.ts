import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon:'home',
      name:'Inicio',
      redirecTo:'/inicio'
    },
    {
      
      icon: 'id-card-outline',
      name: 'Asignaturas',
      redirecTo: '/asignaturas'
    },
    {
      icon:'glasses-outline',
      name:'Gestión Docente',
      redirecTo:'/gestiondocente'
    },
    {

      icon: 'newspaper-outline',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
    {
      icon: 'megaphone-outline',
      name: 'Eventos',
      redirecTo: '/eventos'
    },
    {
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirecTo: '/perfil'
    },   
  ];

}
