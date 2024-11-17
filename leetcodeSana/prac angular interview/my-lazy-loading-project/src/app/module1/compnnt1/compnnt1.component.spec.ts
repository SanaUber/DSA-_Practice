import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compnnt1Component } from './compnnt1.component';

describe('Compnnt1Component', () => {
  let component: Compnnt1Component;
  let fixture: ComponentFixture<Compnnt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Compnnt1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compnnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
