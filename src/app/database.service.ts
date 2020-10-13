import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }



  getTablaEntidad() {
    return this.http.get(`http://localhost:4000/api/entidad`);
  }

  getTablatipoDocumento() {
    return this.http.get(`http://localhost:4000/api/tipoDocumento`);
  }

  getTablatipoContribuyente() {
    return this.http.get(`http://localhost:4000/api/tipoContribuyente`);
  }


  postTablaTipodocumento(data) {
    return this.http.post(`http://localhost:4000/api/modificarTipoDocumento`, data)
      .pipe(
      );
  }

}
