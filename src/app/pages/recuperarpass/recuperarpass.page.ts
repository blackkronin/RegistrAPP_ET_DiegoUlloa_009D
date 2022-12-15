import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.page.html',
  styleUrls: ['./recuperarpass.page.scss'],
})
export class RecuperarpassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recuperacion = {
    email: '',
    re_email:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.recuperacion);
  }

}
