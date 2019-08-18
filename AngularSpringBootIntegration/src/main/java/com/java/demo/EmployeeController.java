package com.java.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ec")
public class EmployeeController {
	
	@Autowired
	EmployeeRepo employeeRepo;
	
	@GetMapping("/employees")
	public List<Employee> getEmp(){
		return employeeRepo.findAll();
	}
	
	
	/*
	 * @RequestMapping("/") public String home() { return "Home.jsp"; }
	 */
	
}
