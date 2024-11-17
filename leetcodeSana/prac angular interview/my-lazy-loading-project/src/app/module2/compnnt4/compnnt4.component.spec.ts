import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compnnt4Component } from './compnnt4.component';

describe('Compnnt4Component', () => {
  let component: Compnnt4Component;
  let fixture: ComponentFixture<Compnnt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Compnnt4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compnnt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
