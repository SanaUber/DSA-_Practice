import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compnnt3Component } from './compnnt3.component';

describe('Compnnt3Component', () => {
  let component: Compnnt3Component;
  let fixture: ComponentFixture<Compnnt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Compnnt3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compnnt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
