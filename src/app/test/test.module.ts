import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TesteComponent } from './teste/teste.component';
import { CrescimentoComponent } from './crescimento/crescimento.component';


@NgModule({
  declarations: [TesteComponent, CrescimentoComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
