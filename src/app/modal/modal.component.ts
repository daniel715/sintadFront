import { Component, OnInit } from '@angular/core';
import {Registrodocumento} from '../interfaces/registroDocumento';
import {DatabaseService} from '../database.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() id_documento: number;

  registrodocumento = new Registrodocumento();  

  id:number;
  codigo:string;
  nombre:string;
  descripcion:string;
  estado:number;

  constructor(public databaseservice: DatabaseService ) { }

  ngOnInit(): void {
  
  }

  modificarRegistro(){
    console.log("Mostrando id desde componente modal", this.id_documento)
    this.registrodocumento.id_actual=this.id_documento;
    this.registrodocumento.id_tipo_documento=this.id;
    this.registrodocumento.codigo=this.codigo;
    this.registrodocumento.nombre=this.nombre;
    this.registrodocumento.descripcion=this.descripcion;
    this.registrodocumento.estado=this.estado;

    console.log(this.registrodocumento);

    
    this.databaseservice
    .postTablaTipodocumento(this.registrodocumento)
    .subscribe(res => {
      console.log('enviado')
    },
    err => console.log(err)
    );
  }
}
