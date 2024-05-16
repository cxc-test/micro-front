import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'clientes',
    pathMatch:'full'
  },
  {
    path:'clientes',
    loadChildren:()=> import('./views/clientes/clientes.module').then(m=> m.ClientesModule)
  },
  {
    path:'facturas',
    loadChildren:()=> import('./views/facturas/facturas.module').then(m=> m.FacturasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
