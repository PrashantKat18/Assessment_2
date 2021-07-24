import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/modal/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen : boolean = false;

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.addProvider.logout();
    // this.router.navigate(['/home']);
  }

  // login(){
  //     const dialogRef = this.dialog.open(LoginComponent);
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log(`Dialog result: ${result}`);
  //     });
  //   }

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar1() {
    this.navbarOpen = !this.navbarOpen;
  }

}
