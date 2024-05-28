package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.respository.EmlpoyeeRespository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
    private EmlpoyeeRespository emlpoyeeRespository;
	
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployee()
	{
		return emlpoyeeRespository.findAll(); 
	}
	
	
	//create employee rest 
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return emlpoyeeRespository.save(employee);
	}
	// get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id)
	{
       Employee employee = emlpoyeeRespository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
	   return ResponseEntity.ok(employee); 
	}
	// upDATE	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails)
	{
		Employee employee = emlpoyeeRespository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		   employee.setFirstName(employeeDetails.getFirstName());
		   employee.setLastName(employeeDetails.getLastName());
		   employee.setEmailId(employeeDetails.getEmailId());
		   
		   Employee updatedEmployee =  emlpoyeeRespository.save(employee);
		   return ResponseEntity.ok(updatedEmployee);
	}
	
	// delete
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String ,Boolean>> deleteEmployee(@PathVariable Long id)
	{
		Employee employee = emlpoyeeRespository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        emlpoyeeRespository.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted" , Boolean.TRUE);
        return ResponseEntity.ok(response);
        
	}
	
	
	
	
}
