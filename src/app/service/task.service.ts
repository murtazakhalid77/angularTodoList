import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private http:HttpClient) { }


  getTask():Observable<any>{
    let baseUrl=`${environment.baseUrl}api/tasks`;
    return this.http.get(baseUrl)
  }

  addTask(taskData:any):Observable<any>{
    let baseUrl=`${environment.baseUrl}api/saveTask/task`;
    return this.http.post(baseUrl,taskData);
  }
  
  deleteTask(id:number):Observable<any>{
    let baseUrl=`${environment.baseUrl}api/task/deleteTask/${id}`
    return this.http.delete(baseUrl);
  }
  
  updateTask(id:any,taskData:any):Observable<any>{
    debugger
    let baseUrl=`${environment.baseUrl}api/update/${id}/task`
    return this.http.put(baseUrl,taskData);
  }

}
