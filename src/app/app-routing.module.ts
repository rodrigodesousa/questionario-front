import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'questionarios', pathMatch: 'full' },
  { path: 'questionarios', component: ExtratoComponent },
  { path: 'novo-questionario', component: NovaTransferenciaComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
