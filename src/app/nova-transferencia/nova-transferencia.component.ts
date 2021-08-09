import { Questionario } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  nome: string;
  descricao: string;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada nova transferencia');
    const nomeEmitir: Questionario = { nome: this.nome, descricao: this.descricao }
    // this.aoTransferir.emit(nomeEmitir);
    this.service.adicionar(nomeEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')

    },
    (error) => console.log(error))
  }
  limparCampos(){
    this.nome = ''
    this.descricao = ''
  }
}
