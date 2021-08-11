import { QuestionarioService } from './../../services/questionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questionario: any
  id: any
  questoes: any[]

  constructor(private questionarioService: QuestionarioService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id'])
    this.questionarioService.getQuestionario(this.id).subscribe((questionario: any) => {
      console.log(questionario)
      this.questionarioService.setQuestionario(questionario)
      this.questionario = questionario
      this.questionarioService.listQuestoes().subscribe((questoes: any) => {
        console.log(questoes)
        this.questoes = questoes
      })
    })
  }

}
