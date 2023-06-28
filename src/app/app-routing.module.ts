import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:"tasks",component:TasksComponent},
  {path:"addTasks",component:AddTaskComponent},
{ path: 'edittask/:id', component: AddTaskComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
