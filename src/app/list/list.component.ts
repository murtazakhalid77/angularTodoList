import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listofList=[
    new List(1,"Morning List","murtaza",new Date()),
    new List(2,"Evening List","murtaza",new Date()),
    new List(3,"Night List","murtaza",new Date())
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
export class List{

  public Sno:number
  public listName:String
  public createdBy:String
  public createdDate:Date
constructor(Sno:number, listName:String,createdBy:String,createdDate:Date){
  this.Sno=Sno;
  this.listName=listName;
  this.createdBy=createdBy
  this.createdDate=createdDate;
  }
  
}
