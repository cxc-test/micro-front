import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { FormFacturaComponent } from './components/form-factura/form-factura.component';
import { FacturasComponent } from './pages/facturas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormFacturaComponent,
    FacturasComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule,
    SharedModule
  ]
})
export class FacturasModule { }
