import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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



  constructor(private taskService:TaskService,private route: ActivatedRoute) { }


  ngOnInit(): void {
    const task = history.state.task;
    this.description=task.description;
    this.comment=task.comment;
    this.dueDate=new Date(Date.parse(task.dueDate));;
    this.time=task.time;
  }

  addTask(){
      const taskData = {
        comment:this.comment,
        description:this.description,
        dueDate:this.dueDate,
        status:this.status,
        time:this.time };
  
      this.taskService.addTask(taskData).subscribe(response=>{
        alert("task Added")
      },
      error=>{
        console.log(error)
      })
  
      
    }

  editTask(){
    debugger
    const taskData = {
      comment:this.comment,
      description:this.description,
      dueDate:this.dueDate,
      status:this.status,
      time:this.time };
  
  this.taskService.updateTask(this.route.snapshot.paramMap.get('id'),taskData).subscribe(response=>{
    alert("task updated")
  },
  error=>{
    console.log(error)
  })
}
  }