import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Itodo } from '../model/todo1';
import { IgenericResponse } from '../model/igeneric';

@Injectable({
  providedIn: 'root'
})
export class Todoservice2Service {

  editTodo$: Subject<Itodo> = new Subject<Itodo>()
     disableFlag:Subject<string>=new Subject<string>()
       todosArray: Array<Itodo> = [
       {
         todoItem: 'IPHONE',
         todoId: '3'
       }, {
         todoItem: 'SAMSUNG',
         todoId: '5'
       }
     ]
   
     constructor() { }
    
     fetchTodos(): Observable<Itodo[]> {
       return of(this.todosArray)
     }
   
     addTodo(newTodo: Itodo): Observable<IgenericResponse<Itodo>> {
       this.todosArray.unshift(newTodo)
       return of({
         status: 'success',
         message: 'New todo added Sucessfully',
         data: newTodo
       })
     }
   
     removeTodo(todoId: string): Observable<IgenericResponse<string>> {
       let getIndex = this.todosArray.findIndex(todo => todo.todoId === todoId)
       this.todosArray.splice(getIndex, 1)
       return of({
         status: 'success',
         message: 'todo Item removed Sucessfully',
         data: todoId
       })
   
     }
   
     updateTodo(updatedObj: Itodo): Observable<IgenericResponse<Itodo>> {
       let getIndex = this.todosArray.findIndex(todo => todo.todoId === updatedObj.todoId);
       this.todosArray[getIndex] = updatedObj;
       return of({
         status: 'success',
         message: 'Todo Item updated Sucessfully',
         data: updatedObj
       })
     }
 
}
