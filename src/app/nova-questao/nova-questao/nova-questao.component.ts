import { Router } from '@angular/router';
import { QuestionarioService } from './../../services/questionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-questao',
  templateUrl: './nova-questao.component.html',
  styleUrls: ['./nova-questao.component.scss']
})
export class NovaQuestaoComponent implements OnInit {
  questionarios: any[]
  questionarioSelecionado: any
  obrigatoria: any
  situacao: any
  tipo: any
  descricao: any
  numero: any

  constructor(private questionarioService: QuestionarioService, private router: Router) { }

  ngOnInit(): void {
    this.questionarioService.todas().subscribe((questionarios: any) => {
      this.questionarios = questionarios
      console.log(this.questionarios)
    })
  }

  criarQuestao(){
    const params = {
      numero: this.numero,
      descricao: this.descricao,
      obrigatoria: this.obrigatoria,
      situacao: this.situacao,
      tipo: this.tipo,
      questionario: {
        id: this.questionarioSelecionado
      }
    }
    this.questionarioService.adicionarQuestao(params).subscribe(resultado => {
      console.log(resultado)
      this.router.navigateByUrl(`questionarios/${this.questionarioSelecionado}`)
    },
    (error) => console.log(error))
  }

}
