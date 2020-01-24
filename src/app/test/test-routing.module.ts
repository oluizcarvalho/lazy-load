import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { CrescimentoComponent } from './crescimento/crescimento.component';

const routes: Routes = [
  { path: '', component: TesteComponent },
  { path: 'crescimento', component: CrescimentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
