import { Questionario } from './../models/transferencia.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[]
  private url = 'https://questionario-api.herokuapp.com/questionarios'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []
  }

  get transferencias(){
    return this.listaTransferencia
  }
  todas(): Observable<any>{
    return this.httpClient.get<any>(this.url)
  }

  adicionar(transferencia: Questionario): Observable<any>{
    // this.hidratar(transferencia)
    return this.httpClient.post<any>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
  }
}
