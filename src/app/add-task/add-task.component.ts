import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  comment: string = '';
  description: string = '';
  dueDate:any;
  status:boolean=false;
  time:String=''
  isEditing: boolean = true;

  constructor(private taskService:TaskService,private route: ActivatedRoute,private router:Router) {
  }


  ngOnInit(): void {
    const task = history.state.task;
  this.description = task ? task.description : '';
  this.comment = task ? task.comment : '';
  this.dueDate = task ? new Date(Date.parse(task.dueDate)) : null;
  this.time = task ? task.time : '';

  this.isEditing = task ? true : false;
  }
  

  // addTask(){
  //   debugger
  //   if (!this.isEditing) {
  //     const taskData = {
  //       comment:this.comment,
  //       description:this.description,
  //       dueDate:this.dueDate,
  //       status:this.status,
  //       time:this.time };
  
  //     this.taskService.addTask(taskData).subscribe(response=>{
  //     },
  //     error=>{
  //       console.log(error)
  //     });
  //     this.resetComponent()
  
  //   }
  //   else{
  //     this.editTask();
  //   }
  //   }

  addTask() {
    debugger
    if (!this.isEditing) {
      const taskData = {
        comment: this.comment,
        description: this.description,
        dueDate: this.dueDate,
        status: this.status,
        time: this.time
      };
  
      this.taskService.addTask(taskData).subscribe(
        response => {
          // Handle success response
        },
        error => {
          console.log(error);
        }
      );
      this.resetComponent();
    } else {
      this.editTask();
    }
      
  }

    resetComponent(){
      this.router.routeReuseStrategy.shouldReuseRoute =()=> false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/tasks'],{
        relativeTo:this.route
      })
    }
  editTask(){
    const taskData = {
      comment:this.comment,
      description:this.description,
      dueDate:this.dueDate,
      status:this.status,
      time:this.time };
  
  this.taskService.updateTask(this.route.snapshot.paramMap.get('id'),taskData).subscribe(response=>{
    this.resetComponent()
  },
  error=>{
    console.log(error)
  });
  this.router.navigate(["/tasks"])
}
  }