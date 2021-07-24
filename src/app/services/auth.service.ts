import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const  authUrl = `${environment}`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { 

  }
  

  login(payLoad: any):Observable<any>{
   const url = `${authUrl}/login`
   return this.http.post<any>(url,payLoad)
  }
  
}
