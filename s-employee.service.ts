import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './i-employee';


@Injectable({
  providedIn: 'root'
})
export class SEmployeeService {

  constructor(private http:HttpClient) { }

 private _url:string = "../assets/employees.json"


getEmployees():Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url);
}

}