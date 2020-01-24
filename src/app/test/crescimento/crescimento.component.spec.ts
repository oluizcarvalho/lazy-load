import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrescimentoComponent } from './crescimento.component';

describe('CrescimentoComponent', () => {
  let component: CrescimentoComponent;
  let fixture: ComponentFixture<CrescimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrescimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrescimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
