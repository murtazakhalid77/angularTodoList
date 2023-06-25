import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  parameter=""
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.parameter=this.activatedRoute.snapshot.params['taskid']
  }

}
