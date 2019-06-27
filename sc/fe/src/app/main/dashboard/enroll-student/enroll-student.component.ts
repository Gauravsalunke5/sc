import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss']
})
export class EnrollStudentComponent implements OnInit {

  /*declared variables and validations*/
  public enrollStudentForm: FormGroup;
  public cert_PRno: any;
  public firstName: any;
  public secondName: any;
  public surname: any;
  public collegeName: any;
  public branch: any;
  public YOP: any;
  public emailId: any;
  public mobileNumber: any;
  public data:string;

  constructor(private httpClient: HttpClient,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.enrollStudentForm = this._fb.group({
      cert_PRno: [null,[Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
      firstName: [null, Validators.required],
      secondName: [null, Validators.required],
      surname:[null, Validators.required],
      collegeName: [null, Validators.required],
      branch: [null, Validators.required],
      YOA: [null,[Validators.required,  Validators.maxLength(4)]],
      emailId:[null, [Validators.required, Validators.email]],
      mobileNumber:[null,[Validators.required, Validators.maxLength(10)]],

    });
  }
  enrollStudent() {

    console.log(this.enrollStudentForm.value);

/*
    this.httpClient.post(`http://localhost:8000/addNewStudent`, this.enrollStudentForm.value
    , {responseType: 'text'} ).subscribe(res => {
      console.log(res);
      
    }   
    )  
  */  
     this.httpClient.post(`http://localhost:8000/addNewStudent`, this.enrollStudentForm.value).subscribe((data:any)=>
     {console.log(data);
     
  })
     
  alert("Success");
  this.enrollStudentForm.reset()
   //  this.enrollStudentForm.reset();

  }


  
}
