import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { 
    

  }

  ngOnInit() {
    this._loginService.isLoggedIn.subscribe(data => data ? this._router.navigate(['dashboard']) : this._router.navigate(['login']));
    
    
  }

}
