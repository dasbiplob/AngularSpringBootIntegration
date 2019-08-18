import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	employeeData: any[];
	
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
  this.showEmployeeData();
  }

	showEmployeeData(){
	this.empService.getEmployeeDetails().subscribe((response) => {
	console.log(response);
	this.employeeData = response;
	}, (error) =>{console.log(error);
	});
	}
}
