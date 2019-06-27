import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { TopnavComponent } from '../../topnav/topnav.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router,
    private _loginService: LoginService
  ) { }

  public type: string = localStorage.getItem('type');

  ngOnInit() {
  }

}
