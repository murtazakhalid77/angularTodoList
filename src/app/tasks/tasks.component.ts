import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService:TaskService,private router: Router,private route:ActivatedRoute) { }

  someSubscription: any;
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
    this.resetComponent()
    this.taskService.deleteTask(id).subscribe(
      response => {
        console.log('Task deleted successfully');
        
      },
      error => {
        this.resetComponent()
      }

    );
  }
  
  resetComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute =()=> false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/tasks'],{
      relativeTo:this.route
    })
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

