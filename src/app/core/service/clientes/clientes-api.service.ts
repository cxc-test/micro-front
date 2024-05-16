import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../../model/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesApiService {

  url:string = environment.host + '/' + environment.pathClient;

  constructor(private http:HttpClient) { }


  public getAll(): Observable<ClienteModel[]> {
    return this.http.get<ClienteModel[]>(this.url+'/');
  }

  public deleteById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url+`/delete/${id}`);
  }

  public create(model:ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(this.url+'/create', model);
  }

  public update(model:ClienteModel): Observable<ClienteModel> {
    return this.http.put<ClienteModel>(this.url+'/update', model);
  }
}
