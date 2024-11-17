import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compnnt2Component } from './compnnt2.component';

describe('Compnnt2Component', () => {
  let component: Compnnt2Component;
  let fixture: ComponentFixture<Compnnt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Compnnt2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compnnt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
