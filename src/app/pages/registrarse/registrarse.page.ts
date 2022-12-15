import { Component, OnInit } from '@angular/core';
import { AlertController,ToastController } from '@ionic/angular';
import { RegistroService,Usuario } from '../../services/registro.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { __values } from 'tslib';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  usuarios: Usuario[] = [];
  registerForm: FormGroup;
  newUser: Usuario = <Usuario>{};

  constructor(private alertMsg:AlertController,
              private regstrServ: RegistroService,
              private toastMsg:ToastController,
              private fb:FormBuilder,
              ){
                this.registerForm = this.fb.group({
                  'nom': new FormControl("",Validators.required),
                  'correo': new FormControl("",[Validators.required,Validators.email]),
                  'pass': new FormControl("",Validators.required),
                  'rePass': new FormControl("",Validators.required),
                  'rut': new FormControl("",Validators.required),
                  'rol': new FormControl("",Validators.required),
                })
               }

  ngOnInit() {
  }

  async CrearUser(){
    var a = 0;
    var form = this.registerForm.value;
    this.regstrServ.getUsers().then(datos =>{
      this.usuarios=datos;
      if(this.usuarios!=null){
        for(let obj of this.usuarios){
          if(obj.correoUser==form.correo){
            a=1;
            this.ErrorDuplicado();
          }
        }
      }
      if(this.registerForm.invalid){
        this.AlertaError();
      }
      if(this.registerForm.valid && a!=1){
        this.newUser.nomUser=form.nom;
        this.newUser.correoUser=form.correo;
        this.newUser.passUser = form.pass;
        this.newUser.repassUser=form.rePass;
        this.newUser.run=form.rut;
        this.newUser.rol=form.rol;
        this.regstrServ.agregarUsuario(this.newUser).then(dato=>{ 
          this.newUser=<Usuario>{};
          this.MostrarMsg('Se ha registrado exitosamente.');
        });
        this.registerForm.reset();
      }
    })
  }

  async MostrarMsg(msg){
    const toast = await this.toastMsg.create({
      message: msg,
      duration: 2000,
      color: "success",
    })
    await toast.present();
  }

  async ErrorDuplicado(){
    const alert = await this.alertMsg.create({
      header:'Error!',
      message:'Esta intentando crear una cuenta en un email ya registrado! Intente nuevamente.',
      buttons:['De Acuerdo']
    })
    await alert.present();
  }

  async AlertaError(){
    const alert = await this.alertMsg.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

}
