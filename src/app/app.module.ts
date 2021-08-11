import { NovoQuestionarioComponent } from './novo-questionario/novo-questionario.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuestionariosComponent } from './questionarios/questionarios.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { QuestionarioComponent } from './questionario/questionario/questionario.component';
import { NovaQuestaoComponent } from './nova-questao/nova-questao/nova-questao.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovoQuestionarioComponent,
    QuestionariosComponent,
    QuestionarioComponent,
    NovaQuestaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
