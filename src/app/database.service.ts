import { Injectable } from '@angular/core';
import { registroContribuyente } from './interfaces/registroContribuyente'
import { registroDocumento } from './interfaces/registroDocumento'
import { registroEntidad } from './interfaces/registroentidad'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private tb_tipoDocumento: registroDocumento[];
  private tb_entidad: registroEntidad[];
  private tb_tipoContribuyente: registroContribuyente[];

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
}
