import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  

  showmodal : Boolean = false;
  nombreTabla:String;
  datosTipoDoc :  [];
  datosEntidad : [];
  datosTipoCon : []
  constructor() { }

    
  ngOnInit(): void {
  }
  modal() : void{
    this.showmodal=true;
    console.log(this.showmodal)
  }

  eliminar(id){
    console.log(id);
    fetch('http://localhost:4000/api/eliminarEntidad', {
      method : 'post',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify( { "id" : id} )
    });

    this.elegirTabla("tEntidad");
  } 

  elegirTabla(tabla:String) :void {
    this.nombreTabla = tabla;
    console.log(this.nombreTabla);

    if(this.nombreTabla==='tEntidad'){
      fetch('http://localhost:4000/api/entidad')
      .then( res => res.json()
      .then(data=> {
        console.log(data);
        this.datosEntidad = data;
      })
      )
      .catch( err=>{
        console.log(err)
      })
    }

    if(this.nombreTabla==='tDocumento'){
      fetch('http://localhost:4000/api/tipoDocumento')
      .then( res => res.json()
      .then(data=> {
        console.log(data);
        this.datosTipoDoc = data;
      })
      )
      .catch( err=>{
        console.log(err)
      })
    }

    if(this.nombreTabla==='tContribuyente'){
      fetch('http://localhost:4000/api/tipoContribuyente')
      .then( res => res.json()
      .then(data=> {
        console.log(data);
        this.datosTipoCon = data;
      })
      )
      .catch( err=>{
        console.log(err)
      })
    }
  }



}
