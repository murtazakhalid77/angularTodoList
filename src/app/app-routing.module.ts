import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddListComponent } from './add-list/add-list.component';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:"addTask/:taskid",component:AddTaskComponent},
  {path:"addList",component:AddListComponent},
  {path:"allList",component:ListComponent},
  {path:"login",component:LoginComponent},
  {path:"todos",component:TodosComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
