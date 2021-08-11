import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaQuestaoComponent } from './nova-questao.component';

describe('NovaQuestaoComponent', () => {
  let component: NovaQuestaoComponent;
  let fixture: ComponentFixture<NovaQuestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaQuestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
