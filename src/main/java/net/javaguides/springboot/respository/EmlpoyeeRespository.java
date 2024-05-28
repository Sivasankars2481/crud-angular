package net.javaguides.springboot.respository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;


@Repository

public interface EmlpoyeeRespository extends JpaRepository<Employee,Long>{
 
}
