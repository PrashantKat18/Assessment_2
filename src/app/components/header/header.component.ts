import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/modal/login/login.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  navbarOpen : boolean = false;
  loginDetails:any
  constructor(public dialog: MatDialog,public authService:AuthService,private router: Router) { 
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe((result:any)=>{
      console.log(result);
        this.router.navigate(['/home']);
    })
  }

  login() {
    this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar1() {
    this.navbarOpen = !this.navbarOpen;
  }

}
