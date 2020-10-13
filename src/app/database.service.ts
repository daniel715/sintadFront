import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  // metodos para traer tablas, campo header con el JWT generado, hacer peticion post a /login para obtener token
  //e insertar en el campo authorization
  getTablaEntidad() {
    return this.http.get(`http://localhost:4000/api/entidad`,{
      headers : {authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbmllbCIsImlhdCI6MTYwMjYwMzUwNiwiZXhwIjoxNjAyNjg5OTA2fQ.uwNylZp_syShlD9hHYhPAnWiYOnDxmIjATXG2LVDK-8"}
    });
  }

  getTablatipoDocumento() {
    return this.http.get(`http://localhost:4000/api/tipoDocumento`,{
      headers : {authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbmllbCIsImlhdCI6MTYwMjYwMzUwNiwiZXhwIjoxNjAyNjg5OTA2fQ.uwNylZp_syShlD9hHYhPAnWiYOnDxmIjATXG2LVDK-8"}
    });
  }

  getTablatipoContribuyente() {
    return this.http.get(`http://localhost:4000/api/tipoContribuyente`,{
      headers : {authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbmllbCIsImlhdCI6MTYwMjYwMzUwNiwiZXhwIjoxNjAyNjg5OTA2fQ.uwNylZp_syShlD9hHYhPAnWiYOnDxmIjATXG2LVDK-8"}
    });
  }

  postTablaTipodocumento(data) {
    return this.http.post(`http://localhost:4000/api/modificarTipoDocumento`, data)
      .pipe(
      );
  }

  postTablaTipoContribuyente(data){
    return this.http.post(`http://localhost:4000/api/modificarTipoContribuyente`, data)
    .pipe(
    );
  }

  postUsuario(data){
    return this.http.post(`http://localhost:4000/login`,data)
      .pipe(
      );
  }

}
