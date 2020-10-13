import { Component, OnInit } from '@angular/core';
import {registroDocumento} from '../interfaces/registroDocumento'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  registrodocumento : registroDocumento;
  
  id:String;
  codigo:String;
  nombre:String;
  descripcion:String;
  estado:Number;

  constructor() { }

  ngOnInit(): void {
  //   this.registrodocumento.id_tipo_documento="";
  //   this.registrodocumento.codigo="";
  //   this.registrodocumento.nombre="";
  //   this.registrodocumento.descripcion="";
  //   this.registrodocumento.estado=0;
  }



  modificarRegistro(){
    this.registrodocumento.id_tipo_documento = "este es el id"
    // this.registroDocumento.id_tipo_documento=this.id;
    // this.registroDocumento.codigo=this.codigo;
    // this.registroDocumento.nombre=this.nombre;
    // this.registroDocumento.descripcion=this.descripcion;
    // this.registroDocumento.estado=this.estado;
    console.log(this.registrodocumento.id_tipo_documento);

  }

}
