import { Questionario } from '../models/questionario.models';
import { QuestionarioService } from '../services/questionario.service';
import { Component, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-questionario',
  templateUrl: './novo-questionario.component.html',
  styleUrls: ['./novo-questionario.component.scss']
})
export class NovoQuestionarioComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  nome: string;
  descricao: string;

  constructor(private service: QuestionarioService, private router: Router){}

  transferir() {
    const nomeEmitir: Questionario = { nome: this.nome, descricao: this.descricao }
    this.service.adicionar(nomeEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('questionarios')

    },
    (error) => console.log(error))
  }
  limparCampos(){
    this.nome = ''
    this.descricao = ''
  }
}
