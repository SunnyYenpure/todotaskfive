import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { Todoservice3Service } from '../../services/todoservice3.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Itodo } from '../../model/todo1';

@Component({
  selector: 'app-todo-dashboard3',
  templateUrl: './todo-dashboard3.component.html',
  styleUrls: ['./todo-dashboard3.component.scss']
})
export class TodoDashboard3Component implements OnInit {

 isInEditMode = false;
   editedId = '';
 
   @ViewChild('todoForm') todoForm!: NgForm;
    constructor(
     private _uuid: UuidService,
     private _todoSer: Todoservice3Service,
     private _snackbar: SnackbarService
   ) {}
 
 
 
   ngOnInit(): void {
     this._todoSer.editTodo$.subscribe((todo: Itodo) => {
       this.isInEditMode = true;
       this.editedId = todo.todoId;
       this.todoForm?.form.patchValue(todo);
     });
   }
 
   addTodo() {
     if (!this.todoForm.valid) {
       this._snackbar.openSnackbar('Please enter todo');
       return;
     }
 
     const newTodo: Itodo = {
       todoItem: this.todoForm.value.todoItem,
       todoId: this._uuid.Uuid()
     };
 
     this._todoSer.addTodo(newTodo).subscribe({
       next: res => {
         this._snackbar.openSnackbar(res.message);
         this.todoForm.reset();
       },
       error: err => this._snackbar.openSnackbar(err?.message || 'Add failed')
     });
   }
 
   updateTodo() {
     if (!this.todoForm.valid) return;
 
     const updatedTodo: Itodo = {
       todoItem: this.todoForm.value.todoItem,
       todoId: this.editedId
     };
 
     this._todoSer.updateTodo(updatedTodo).subscribe({
       next: res => {
         this._snackbar.openSnackbar(res.message);
         this.isInEditMode = false;
         this._todoSer.disableFlag.next('');
         this.todoForm.reset();
       },
       error: err => this._snackbar.openSnackbar(err?.message || 'Update failed')
     });
   }

}
