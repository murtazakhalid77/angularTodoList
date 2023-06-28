import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService:TaskService,private router: Router) { }


  listofTask:any;


  ngOnInit(): void {
    this.listofTask=this.taskService.getTask().subscribe(
      response =>{
        this.listofTask=response;
    },error=>{
      console.log(error)
    })
    
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe(
      response => {
        console.log('List deleted successfully');
        document.location.reload();
        
      },
      error => {
        console.error(error);
      }
    );
  }
  task:any
  editTask(id:number){
    const selectedTask: 
    { id: number, comment: string, description: string, time: string }
     = this.listofTask.find
     ((task: { id: number, comment: string, description: string, dueDate: string, time: string }) => task.id === id);
    this.router.navigate(['/edittask', id], { state: { task: selectedTask } });
 
  }


}

