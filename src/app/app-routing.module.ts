import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { DocenteGuard } from './guards/docente.guard';
import { EstudianteGuard } from './guards/estudiante.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NotLoggedInGuard]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule),
    canActivate: [NotLoggedInGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule),
    canActivate: [LoggedInGuard,EstudianteGuard]
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQRPageModule),
    canActivate: [LoggedInGuard,EstudianteGuard]
  },
  {
    path: 'ver-horario',
    loadChildren: () => import('./pages/ver-horario/ver-horario.module').then( m => m.VerHorarioPageModule),
    canActivate: [LoggedInGuard,EstudianteGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'justificar',
    loadChildren: () => import('./pages/justificar/justificar.module').then( m => m.JustificarPageModule),
    canActivate: [LoggedInGuard,EstudianteGuard]
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./pages/recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: 'asig-alumno',
    loadChildren: () => import('./pages/asig-alumno/asig-alumno.module').then( m => m.AsigAlumnoPageModule),
    canActivate: [LoggedInGuard,EstudianteGuard]
  },
  {
    path: 'gestiondocente',
    loadChildren: () => import('./pages/gestiondocente/gestiondocente.module').then( m => m.GestiondocentePageModule),
    canActivate: [LoggedInGuard,DocenteGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule),
    canActivate: [LoggedInGuard,DocenteGuard]
  },
  {
    path: 'desplegar-qr',
    loadChildren: () => import('./pages/desplegar-qr/desplegar-qr.module').then( m => m.DesplegarQrPageModule),
    canActivate: [LoggedInGuard,DocenteGuard]
  },
  {
    path: 'enviarmsj',
    loadChildren: () => import('./pages/enviarmsj/enviarmsj.module').then( m => m.EnviarmsjPageModule),
    canActivate: [LoggedInGuard,DocenteGuard]
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule),
    canActivate: [LoggedInGuard,DocenteGuard]
  },
  {
    path: 'listclases',
    loadChildren: () => import('./pages/listclases/listclases.module').then( m => m.ListclasesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
