import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface usuario{
  usuId: number;
  nombre:string;
  apellido:string;
}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:57570'


  constructor(private http: HttpClient) {
    console.log('Servicio usuario');

  }

  getUsuarios() {
    const options = {responseType: 'text' as 'json'};
    const response = this.http.get(this.API_URI, options).toPromise();
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this.API_URI, {
        headers: header
      });
  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   //   responseType: 'text'
  //   }),
  //   'responseType': 'blob' as 'json',
  // };

  getUsers() {
    return this.http.get(`${this.API_URI}/api/user`);
  }

  getUser(id: string) {
    return this.http.get(`${this.API_URI}/api/user/${id}`);
  }

}
