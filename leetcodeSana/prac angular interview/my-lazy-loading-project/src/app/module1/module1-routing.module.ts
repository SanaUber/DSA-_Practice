import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compnnt2Component } from './compnnt2/compnnt2.component';
import { Compnnt1Component } from './compnnt1/compnnt1.component';

const routes: Routes = [{
  path:'comp1',component:Compnnt1Component},
  {path:'comp2',component:Compnnt2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
