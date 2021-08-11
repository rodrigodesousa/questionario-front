import { Questionario } from '../models/questionario.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  private listaQuestionario: any[]
  private questionario: any
  private listaQuestoes: any[]

  constructor(private httpClient: HttpClient) {
    this.listaQuestionario = []
    this.listaQuestoes = []
  }

  get questionarios(){
    return this.listaQuestionario
  }
  setQuestionario(valor){
    this.questionario = valor
  }
  todas(): Observable<any>{
    return this.httpClient.get<any>('https://questionario-api.herokuapp.com/questionarios/all')
  }
  getQuestionario(id): Observable<any>{
    return this.httpClient.get<any>(`https://questionario-api.herokuapp.com/questionarios/${id}`)
  }
  listQuestoes(): Observable<any>{
    return this.httpClient.get<any>(`https://questionario-api.herokuapp.com/questoes/questionario/${this.questionario.id}`)
  }

  adicionar(questionario: Questionario): Observable<any>{
    return this.httpClient.post<any>('https://questionario-api.herokuapp.com/questionarios', questionario)
  }
  adicionarQuestao(params): Observable<any>{
    return this.httpClient.post<any>('https://questionario-api.herokuapp.com/questoes', params)
  }

}
