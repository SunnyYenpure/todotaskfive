import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboard4Component } from './todo-dashboard4.component';

describe('TodoDashboard4Component', () => {
  let component: TodoDashboard4Component;
  let fixture: ComponentFixture<TodoDashboard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboard4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
