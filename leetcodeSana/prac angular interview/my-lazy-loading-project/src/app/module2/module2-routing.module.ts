import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compnnt3Component } from './compnnt3/compnnt3.component';
import { Compnnt4Component } from './compnnt4/compnnt4.component';
 
const routes: Routes = [{
  path:'comp3',component:Compnnt3Component},
  {path:'comp4',component:Compnnt4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
