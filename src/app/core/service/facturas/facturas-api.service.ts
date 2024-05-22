import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacturaModel } from '../../model/factura.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasApiService {
  url:string = environment.host + '/' + environment.pathFactura;

  constructor(private http:HttpClient) { }


  public getAll(): Observable<FacturaModel[]> {
    return this.http.get<FacturaModel[]>(this.url+'/');
  }

  public deleteById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url+`/deleteById/${id}`);
  }

  public create(model:FacturaModel): Observable<FacturaModel> {
    return this.http.post<FacturaModel>(this.url+'/create', model);
  }

  public update(model:FacturaModel): Observable<FacturaModel> {
    return this.http.put<FacturaModel>(this.url+'/update', model);
  }
}