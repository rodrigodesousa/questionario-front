import { NovaQuestaoComponent } from './nova-questao/nova-questao/nova-questao.component';
import { QuestionarioComponent } from './questionario/questionario/questionario.component';
import { NovoQuestionarioComponent } from './novo-questionario/novo-questionario.component';
import { QuestionariosComponent } from './questionarios/questionarios.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'questionarios', pathMatch: 'full' },
  { path: 'questionarios', component: QuestionariosComponent },
  { path: 'novo-questionario', component: NovoQuestionarioComponent },
  { path: 'questionarios/:id', component: QuestionarioComponent },
  { path: 'nova-questao', component: NovaQuestaoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
