import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Compnnt1Component } from './compnnt1/compnnt1.component';
import { Compnnt2Component } from './compnnt2/compnnt2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [Compnnt1Component,Compnnt2Component],
  imports: [
    CommonModule, RouterModule ,
    Module1RoutingModule
  ]
})
export class Module1Module { }
