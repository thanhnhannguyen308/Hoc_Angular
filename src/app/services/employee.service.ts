import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://5d3f1d8ca42af00014868fbc.mockapi.io/employee";
    constructor(private _http: Http) {

    }

    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json());

    }
}