import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(
    private _http: HttpClient,
    private router: Router,

  ) {
    if (localStorage.getItem('token')) {
      this.isLoggedIn.next(true);
    }
  }

  login(body: any, type: string) {
    this.isLoggedIn.next(null);
    this._http.post("http://localhost:8000/Login", {
      username: body.username,
      password: body.password,
      role: type
    }).subscribe(res => {
      if (res == "success") {
        this.isLoggedIn.next(true);
        localStorage.setItem("type", type);
        localStorage.setItem("token", type);
        localStorage.setItem("username",body.username);
        this.router.navigate(["dashboard"]);
      } else {
        this.isLoggedIn.next(false);
        alert("Wrong credentials,Please try again!! ");
      }
    })
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
  }

}

