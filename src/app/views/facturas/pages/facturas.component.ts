import { Component, OnInit } from '@angular/core';
import { FormFacturaComponent } from '../components/form-factura/form-factura.component';
import { MatDialog } from '@angular/material/dialog';
import { FacturaModel } from 'src/app/core/model/factura.model';
import { FacturasApiService } from 'src/app/core/service/facturas/facturas-api.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {
  dataSource: FacturaModel[] = [];
  displayedColumns: string[] = [
    'id',
    'amount',
    'coin',
    'clientId',
    'view'
  ];

  constructor(
    private _modal: MatDialog, 
    private api:FacturasApiService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  add() {
    const dialogRef = this._modal.open(FormFacturaComponent, {
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

  update(row:FacturaModel) {
    const dialogRef = this._modal.open(FormFacturaComponent, {
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

  deleteById(row:FacturaModel){
    this.api.deleteById(row.id)
            .subscribe(item => {
              this.getAll();
            });
  }

}
