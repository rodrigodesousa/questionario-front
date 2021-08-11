import { QuestionarioService } from './services/questionario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  constructor(private service: QuestionarioService ){

  }

  // transferir($event){
  //   this.service.adicionar($event)
  // }
}
