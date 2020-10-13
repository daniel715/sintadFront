import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {RegistroContribuyente} from '../interfaces/registroContribuyente'
import {DatabaseService} from '../database.service'

@Component({
  selector: 'app-modal-contribuyente',
  templateUrl: './modal-contribuyente.component.html',
  styleUrls: ['./modal-contribuyente.component.css']
})
export class ModalContribuyenteComponent implements OnInit {
  @Input() id_contribuyente: number;
  id:number;
  nombre:String;
  estado : number;
  registrocontribuyente = new RegistroContribuyente();
  constructor(public databaseservice: DatabaseService ) { }

  ngOnInit(): void {
  }

  modificarRegistro(){
    console.log("Mostrando id contribuyente desde hijo", this.id_contribuyente)
    console.log(this.id,this.nombre,this.estado);
    this.registrocontribuyente.id_tipo_contribuyente=this.id;
    this.registrocontribuyente.nombre=this.nombre;
    this.registrocontribuyente.estado=this.estado;
    this.registrocontribuyente.idActual=this.id_contribuyente;

    this.databaseservice
    .postTablaTipoContribuyente(this.registrocontribuyente)
    .subscribe(res => {
      console.log('enviado')
    },
    err => console.log(err)
    );

  }

}
