import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile-details',
  templateUrl: './edit-profile-details.component.html',
  styleUrls: ['./edit-profile-details.component.scss']
})
export class EditProfileDetailsComponent implements OnInit {

  public prNumber: any;
  public forgotPasswordForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.forgotPasswordForm = this.fb.group({
      prNumber: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],


    });

  }
  forgotPassword() {
    console.log(this.forgotPasswordForm.value)

    this.httpClient.post(`http://localhost:8000/get_password`,
      this.forgotPasswordForm.value).subscribe(res => {
        alert("error");
        console.log(res);
        //this.recordCertForm.reset();
      },
        error => {
          alert("Check your mail please.");
          this.forgotPasswordForm.reset();
          
        });


  }


}
