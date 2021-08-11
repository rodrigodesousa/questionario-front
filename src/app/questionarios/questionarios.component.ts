import { Router } from '@angular/router';
import { QuestionarioService } from '../services/questionario.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionarios',
  templateUrl: './questionarios.component.html',
  styleUrls: ['./questionarios.component.scss']
})
export class QuestionariosComponent implements OnInit {
  questionarios: any[]

  constructor(private service: QuestionarioService, private router: Router) { }

  ngOnInit(): void {
    this.service.todas().subscribe((questionarios: any) => {
      console.log(questionarios)
      this.questionarios = questionarios
    })
  }

  visualizar(questionario){
    this.service.setQuestionario(questionario)
    this.router.navigateByUrl(`questionarios/${questionario.id}`)
  }

}
