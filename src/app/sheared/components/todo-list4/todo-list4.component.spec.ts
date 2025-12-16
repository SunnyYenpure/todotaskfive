import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList4Component } from './todo-list4.component';

describe('TodoList4Component', () => {
  let component: TodoList4Component;
  let fixture: ComponentFixture<TodoList4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoList4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
