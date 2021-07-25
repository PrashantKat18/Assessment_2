import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CONSTANTS } from '../app.constants';

const  authUrl = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_name :any;
  user_id:any;
  password:any;
  isUserLoggedIn: boolean = false;
  isLogin:any;
  constructor(private http : HttpClient) { 
  }
  
  login(payLoad: any):Observable<any> {
    var data = CONSTANTS.usersDb
    for (const user of data) {
      if (user.user_id === payLoad.user_id && user.password ===  payLoad.password) {
          localStorage.setItem('this.isUserLoggedIn', "true");
          localStorage.setItem('user_id',user.user_id);
          localStorage.setItem('password',user.password);
          localStorage.setItem('user_name',user.user_name);
          this.user_id = localStorage.getItem("user_id");
          this.password = localStorage.getItem("password");  
          this.user_name = localStorage.getItem("user_name");                  
          this.isLogin = localStorage.getItem("this.isUserLoggedIn");
      }
    }
   return of(this.isLogin);   
  }

  logout():Observable<any>{
    this.user_name = ""  
    localStorage.removeItem('user_name');
    localStorage.removeItem('password');
    localStorage.setItem('this.isUserLoggedIn','false');
    this.isLogin = false
    return of(this.isLogin);
  }

  getSearch(search: string):Observable<any> {
    var data = CONSTANTS.usersDb
    return of(data);

  }

  
}
