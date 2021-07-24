import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_id: any;
  password: any;
  user_name:any;
  // formData: FormGroup;
  loginForm: any;
  constructor(private authService :AuthService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }

  onClickSubmit() {
    var payLoad = {
      user_id :this.user_id,
      password : this.password,
      user_name :this.user_name
    }
    this.authService.login(payLoad)
      .subscribe(data => {
        console.log("Is Login Success: " + data);
        if (data) this.router.navigate(['/home']);
      });
  }

  get f() { return this.loginForm.controls; }



  onReset() {
    this.loginForm.reset();
  }

}
