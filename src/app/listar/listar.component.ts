import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  nombreTabla: String;
  showmodal: Boolean = false;
  datosTipoDoc 
  datosEntidad 
  datosTipoCon 
  idActual

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


  modal(id): void {
    this.idActual = id;
    console.log(this.idActual)
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
