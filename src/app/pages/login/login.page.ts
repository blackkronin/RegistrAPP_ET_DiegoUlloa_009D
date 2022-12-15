import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroService, Usuario } from '../../services/registro.service';
import { NavController } from '@ionic/angular';

import {
        FormGroup,
        FormControl,
        Validators,
        FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup
  usuarios: Usuario[]=[];

  constructor(private alertCtrl : AlertController,
              private navCtrl: NavController,
              private servRegst: RegistroService,
              private fb: FormBuilder) 
              {
                this.formLogin = this.fb.group({
                  'correo': new FormControl("",Validators.required),
                  'pass': new FormControl("",Validators.required),
                })
              }

  ngOnInit() {
  }

  async errorIngreso() {
    const alert = await this.alertCtrl.create({
      header:'Error',
      message:'Los datos no se han ingresado correctamente... Porfavor reintente nuevamente.',
      buttons:['Ok!']
    })
    await alert.present();
    return;
  }

  async Ingresar()
  {
    var f = this.formLogin.value;
    var a = 0;
    this.servRegst.getUsers().then(datos =>{
      this.usuarios=datos;
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if(f.correo == obj.correoUser && f.pass == obj.passUser){
          a = 1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          localStorage.setItem('nombre',obj.nomUser);
          localStorage.setItem('rol',obj.rol);
          localStorage.setItem('rut',obj.run);
          this.navCtrl.navigateRoot('inicio');
        }
      }
      if(a==0){
        this.errorIngreso();
      }
    })
  }

}
