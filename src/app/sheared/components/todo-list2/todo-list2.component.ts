import { Component, inject, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo1';
import { Todoservice2Service } from '../../services/todoservice2.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.scss']
})
export class TodoList2Component implements OnInit {

    
    todosArr: Itodo[] = [];
      editedId: string = '';
    
      private _TodoserviceService = inject(Todoservice2Service);
    
      constructor(
        private _dialog: MatDialog,
        private _snackbar: SnackbarService
      ) {}
    
      ngOnInit(): void {
        this.fetchTodos();
    
        this._TodoserviceService.disableFlag.subscribe((id: string) => {
          this.editedId = id;
        });
      }
    
      trackById(index: number, todo: Itodo) {
        return todo.todoId;
      }
    
      fetchTodos() {
        this._TodoserviceService.fetchTodos().subscribe({
          next: (res: Itodo[]) => this.todosArr = res,
          error: () => this._snackbar.openSnackbar('Failed to load todos')
        });
      }
    
      editTodo(todo: Itodo) {
        this.editedId = todo.todoId;
        this._TodoserviceService.editTodo$.next(todo);
      }
    
      removeTodo(todoId: string) {
        const config = new MatDialogConfig();
        config.width = '400px';
        config.data = 'Are you sure you want to remove this todo?';
    
        const dialogRef = this._dialog.open(GetConfirmComponent, config);
    
        dialogRef.afterClosed().subscribe(confirm => {
          if (confirm) {
            this._TodoserviceService.removeTodo(todoId).subscribe({
              next: (res: { message: string; }) => this._snackbar.openSnackbar(res.message),
              error: (err: { message: any; }) => this._snackbar.openSnackbar(err?.message || 'Delete failed')
            });
          }
        });
      }
}
