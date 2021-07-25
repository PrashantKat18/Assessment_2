import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_id: string = "";
  password: string = "";
  user_name:string = "";
  loginForm: FormGroup;

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,private authService :AuthService,private router: Router,public dialogRef: MatDialogRef<LoginComponent>) { 
    this.loginForm = this.formBuilder.group({
      user_id: new FormControl(),
      password: new FormControl(),
      // user_name: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    var payLoad = {
      user_id :this.loginForm.controls.user_id.value,
      password : this.loginForm.controls.password.value,
      // user_name :this.loginForm.controls.user_name.value
    }
    this.authService.login(payLoad).subscribe((result:any)=>{
      console.log("value",result);
      if(result){
        this.closeDialog();
      } else {
        this.openDialog();
        this.closeDialog();
      }
    });
  }

  get f() { return this.loginForm.controls; }
  
  openDialog() {
    this.dialog.open(MessageComponent);
  }

  onReset() {
    this.loginForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
