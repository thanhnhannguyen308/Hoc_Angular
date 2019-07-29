import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        const employee: any[] = [
            { Id: 1, Name: "Nguyen Thanh Nhan" },
            { Id: 2, Name: "Nguyen Thi Huong" },
            { Id: 3, Name: "Nguyen Van Tuan" }
        ];
        return employee;
    }
}