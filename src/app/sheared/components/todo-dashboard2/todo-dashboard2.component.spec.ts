import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboard2Component } from './todo-dashboard2.component';

describe('TodoDashboard2Component', () => {
  let component: TodoDashboard2Component;
  let fixture: ComponentFixture<TodoDashboard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
