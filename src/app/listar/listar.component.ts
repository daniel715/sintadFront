import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  modalDocumentos;
  modalContribuyentes;
  nombreTabla: String;
  datosTipoDoc 
  datosEntidad 
  datosTipoCon 
  // variable para dar al componente modal el valor del id que va a modificar
  idDocumento 
  // variable para dar al componente modal-contribuyente el valor del id que va a modificar
  idContribuyente

  constructor(public databaseservice: DatabaseService) { }

  ngOnInit() {
    this.databaseservice.getTablatipoContribuyente().subscribe(
      res => {
        this.datosTipoCon = res;
      },
      err => console.log(err)
    )

    this.databaseservice.getTablaEntidad().subscribe(
      res => {
        this.datosEntidad = res;
        console.log(this.datosEntidad)
      },
      err => console.log(err)
    );

    this.databaseservice.getTablatipoDocumento().subscribe(
      res => {
        this.datosTipoDoc = res;
      },
      error => console.log(error)
    )
  }

  elegirTabla(nombretabla) {
    this.nombreTabla = nombretabla;
  }


  modalDocumento(id): void {
    this.modalContribuyentes=false;
    this.modalDocumentos=true;
    this.idDocumento = id;
    console.log(this.idDocumento)
  }

  modalContribuyente(id) {
    this.modalDocumentos=false;
    this.modalContribuyentes=true;
    this.idContribuyente = id;
  }



  eliminar(id) {
    console.log(id);
    fetch('http://localhost:4000/api/eliminarEntidad', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ "id": id })
    });
  }

}
