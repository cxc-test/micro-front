import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { ClientesComponent } from './pages/clientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    FormClienteComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    // MaterialModule
    SharedModule
  ]
})
export class ClientesModule { }
