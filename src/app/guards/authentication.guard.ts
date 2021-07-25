import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageComponent } from '../modal/message/message.component';
import { Message1Component } from '../modal/message1/message1.component';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor (public authService:AuthService,public dialog: MatDialog) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLogin) {
        return true
      }
      else {
        this.getpermission();
        return false
      }
  }

  getpermission() {
    if (!this.authService.isLogin) {
      this.openDialog();
    } 
  }

  openDialog() {
    this.dialog.open(Message1Component);
  }
  
}
