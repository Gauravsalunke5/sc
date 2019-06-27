import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { Certificate } from '@angular/forms'
import { Certificate } from '../../shared/models/certificate.model';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  public queryCertForm:FormGroup;
  public seatNo:any;
  public Newcertificate: Certificate = new Certificate({});
//public queryCertForm: FormGroup;
//public seatNo:any;
//public Newcertificate: Certificate = new Certificate({});


  constructor(
    private httpClient:HttpClient,
    private _fb:FormBuilder
    ) { }

  ngOnInit() {
    this.queryCertForm=this._fb.group({
      seatNo:null
    })
  }

  queryCert(){
   this.httpClient.get(`http://localhost:8000/get_cert/${this.queryCertForm.get('seatNo').value}`, this.queryCertForm.value).subscribe(res => {
      this.Newcertificate = new Certificate(res);
  });
  }

}
