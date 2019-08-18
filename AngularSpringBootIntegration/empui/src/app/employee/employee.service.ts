import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	private url = "http://localhost:8080/ec/employees";
  constructor(private http: HttpClient) { 
  }
  
  getEmployeeDetails(): Observable<any> {
  	//const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  	return this.http.get(this.url);
  }
}
