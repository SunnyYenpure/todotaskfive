import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboard1Component } from './todo-dashboard1.component';

describe('TodoDashboard1Component', () => {
  let component: TodoDashboard1Component;
  let fixture: ComponentFixture<TodoDashboard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
