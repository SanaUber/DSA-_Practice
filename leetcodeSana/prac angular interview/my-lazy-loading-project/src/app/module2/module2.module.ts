import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Compnnt3Component } from './compnnt3/compnnt3.component';
import { Compnnt4Component } from './compnnt4/compnnt4.component';
import { RouterModule } from '@angular/router';


@NgModule({
  
  declarations: [Compnnt3Component,Compnnt4Component],
  imports: [
    CommonModule, RouterModule ,
    Module2RoutingModule
  ]
})
export class Module2Module { }
