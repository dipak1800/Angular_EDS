import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employ-details-page',
  templateUrl: './employ-details-page.component.html',
  styleUrls: ['./employ-details-page.component.scss'],
})
export class EmployDetailsPageComponent implements OnInit {
  constructor(
    private _employeeService: EmployeesService,
    private _route: ActivatedRoute
  ) {}
  EmployDetails = {};
  employId;
  isError = false;
  errorMessage;
  loading = false;
  ngOnInit() {
    let id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.employId = id;

    this._employeeService.getEmployDetails(id).subscribe(
      (data) => {
        this.loading = true;
        this.EmployDetails = Object.values(data)[1];
        console.log(Object.values(data)[1]);
      },
      (err) => {
        this.loading = true;
        this.errorMessage = err;
        this.isError = true;
      }
    );
  }
  public Data;
}
