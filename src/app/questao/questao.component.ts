import { TransferenciaService } from '../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {
  transferencias: any[]

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: any) => {
      console.table(transferencias)
      this.transferencias = transferencias.content
    })
  }

}
