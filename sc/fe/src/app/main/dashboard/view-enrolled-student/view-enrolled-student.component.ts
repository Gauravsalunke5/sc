import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentRecord } from '../../../shared/models';

@Component({
  selector: 'app-view-enrolled-student',
  templateUrl: './view-enrolled-student.component.html',
  styleUrls: ['./view-enrolled-student.component.scss']
})
export class ViewEnrolledStudentComponent implements OnInit {

  public queryForm: FormGroup;
  public cert_PRno: any;
  public studentName: any;
  public collegeName: any;
  public seatNumber: any;
  public Examination: any;
  public YOP: any;
  public emailId: any;
  public Branch: any;
  public mobileNumber: any;
  public secondName:any;
  public student: StudentRecord = new StudentRecord({});

  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.queryForm = this._fb.group({
      cert_PRno: null,
      firstName: null
    });
  }

  viewEnrolled() {
    this.http.get(`http://localhost:8000/get_student/${this.certPRno.value}`).subscribe((response: any[]) => {
      console.log(response);
       this.student = new StudentRecord(response);
    });
  }

  get certPRno(): FormControl {
    return this.queryForm.get('cert_PRno') as FormControl;
  }

}
