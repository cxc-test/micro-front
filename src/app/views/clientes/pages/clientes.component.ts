import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormClienteComponent } from '../components/form-cliente/form-cliente.component';
import { ClientesApiService } from 'src/app/core/service/clientes/clientes-api.service';
import { ClienteModel } from 'src/app/core/model/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  dataSource: ClienteModel[] = [];
  displayedColumns: string[] = [
    'name',
    'rfc',
    'phoneNumber',
    'view'
  ];

  constructor(
    private _modal: MatDialog, 
    private api:ClientesApiService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  
  add() {
    const dialogRef = this._modal.open(FormClienteComponent, {
      height: 'auto',
      width: 'auto',
      disableClose: false,
      data: { form:null }
    });

    dialogRef.afterClosed().subscribe(item => {
      if(item != null) 
        this.api.create(item)
            .subscribe(item => {
              this.dataSource.push(item);
              this.dataSource = [...this.dataSource];
            });
    });
  }

  update(row:ClienteModel) {
    const dialogRef = this._modal.open(FormClienteComponent, {
      height: 'auto',
      width: 'auto',
      disableClose: false,
      data: { form:row }
    });

    dialogRef.afterClosed().subscribe(item => {
      if(item != null) 
        this.api.update(item)
            .subscribe(item => {
              this.dataSource.push(item);
              this.dataSource = [...this.dataSource];
            });
    });
  }

  getAll(){
    this.dataSource = [];
    this.api.getAll().subscribe(item => this.dataSource = item);
  }

  deleteById(row:ClienteModel){
    this.api.deleteById(row.id)
            .subscribe(item => {
              this.getAll();
            });
  }

}
