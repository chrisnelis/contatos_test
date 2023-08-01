import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContatosService extends ApiService{

  constructor(
    private http: HttpClient
  ) {super() }

  editar(obj: any){
    return this.http.post(this.apiUrl+'editar', obj)
  }

  getcontatos(){
    return this.http.get(this.apiUrl+'contatos')
  }


  inserir(obj: any){
    return this.http.post(this.apiUrl+'inserir', obj)
  }

  delete(obj: any){
    return this.http.post(this.apiUrl+'delete', obj)
  }

}
