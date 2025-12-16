import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../components/get-confirm/get-confirm.component';
import { TodoserviceService } from './todoservice.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {


  constructor(
  private _matDialog: MatDialog,
  private _todosSer: TodoserviceService,
  private _snackBar: SnackbarService
) {}

removeTodo(todoId: string) {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '400px';
  dialogConfig.maxWidth = '90%';
  dialogConfig.disableClose = true;
  dialogConfig.data = 'Are you sure you want to remove this todo ?';

  const dialogRef = this._matDialog.open(
    GetConfirmComponent,
    dialogConfig
  );

  dialogRef.afterClosed().subscribe(res => {
    if (res === true) {
      this._todosSer.removeTodo(todoId).subscribe({
        next: res => this._snackBar.openSnackbar(res.message),
        error: err =>
          this._snackBar.openSnackbar(err?.message || 'Delete failed')
      });
    }
  });
}

}
