import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList3Component } from './todo-list3.component';

describe('TodoList3Component', () => {
  let component: TodoList3Component;
  let fixture: ComponentFixture<TodoList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoList3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
