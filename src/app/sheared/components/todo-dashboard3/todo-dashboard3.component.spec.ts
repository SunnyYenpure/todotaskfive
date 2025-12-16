import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboard3Component } from './todo-dashboard3.component';

describe('TodoDashboard3Component', () => {
  let component: TodoDashboard3Component;
  let fixture: ComponentFixture<TodoDashboard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
