import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(
    private _loginService: LoginService

  ) { }

  ngOnInit() {
    this._loginService.isLoggedIn.subscribe(data => this.isLoggedIn = data);
  }

  logout() {
    this._loginService.logout();
  }

  scroll(el: string) {
    const element = document.getElementById(el);
    element.scrollIntoView();
  }
}
