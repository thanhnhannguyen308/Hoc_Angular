import  { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
})

export class EmployeeListComponent implements OnInit{
    public employee: any[];
    //Neu su dung DI thi khai bao contructor gan chi dinh
    constructor(private employeeService : EmployeeService){
    }
    
    ngOnInit(){
        this.employeeService.GetList().subscribe((response: any) => {
            this.employee = response;
        });
    }
}