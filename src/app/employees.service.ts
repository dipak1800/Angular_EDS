import { Observable, throwError as ObservableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private _http: HttpClient) {}
  allEmployeesUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  //Original url is working fine in console,but when i set value it is returning Undefined
  getEmployees(): Observable<IEmployee[]> {
    return this._http
      .get<IEmployee[]>(this.allEmployeesUrl)
      .pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    return ObservableThrowError(err.message || 'Something went wrong');
  }

  getEmployDetails(id: number) {
    return this._http
      .get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
      .pipe(catchError(this.handleError));
  }
}
