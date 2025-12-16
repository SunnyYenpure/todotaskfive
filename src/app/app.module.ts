import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './sheared/components/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './sheared/components/todo-list/todo-list.component';
import { GetConfirmComponent } from './sheared/components/get-confirm/get-confirm.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TodoDashboard1Component } from './sheared/components/todo-dashboard1/todo-dashboard1.component';
import { TodoList1Component } from './sheared/components/todo-list1/todo-list1.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoDashboard2Component } from './sheared/components/todo-dashboard2/todo-dashboard2.component';
import { TodoList2Component } from './sheared/components/todo-list2/todo-list2.component';
import { TodoDashboard3Component } from './sheared/components/todo-dashboard3/todo-dashboard3.component';
import { TodoList3Component } from './sheared/components/todo-list3/todo-list3.component';
import { Todoservice3Component } from './sheared/components/todoservice3/todoservice3.component';
import { TodoDashboard4Component } from './sheared/components/todo-dashboard4/todo-dashboard4.component';
import { TodoList4Component } from './sheared/components/todo-list4/todo-list4.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    GetConfirmComponent,
    TodoDashboard1Component,
    TodoList1Component,
    TodoDashboard2Component,
    TodoList2Component,
    TodoDashboard3Component,
    TodoList3Component,
    Todoservice3Component,
    TodoDashboard4Component,
    TodoList4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
