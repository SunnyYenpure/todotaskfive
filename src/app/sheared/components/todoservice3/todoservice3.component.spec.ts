import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoservice3Component } from './todoservice3.component';

describe('Todoservice3Component', () => {
  let component: Todoservice3Component;
  let fixture: ComponentFixture<Todoservice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todoservice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todoservice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
