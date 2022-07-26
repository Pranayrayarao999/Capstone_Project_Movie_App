import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogwelcomeadminComponent } from '../admin/dialogbox/dialogwelcomeadmin/dialogwelcomeadmin.component';
import { DialogboxComponent } from '../dialodboxmessages/dialogbox/dialogbox.component';
import { Dialogbox1Component } from '../dialodboxmessages/dialogboxlogin1/dialogbox1.component';
import { Dialogbox6Component } from '../dialodboxmessages/dialogboxlogin2/dialogbox6.component';
import { Logindata } from '../model/logindata';
import { Movie } from '../model/movie';
import { LogoutService } from '../service/logout.service';
import { MovieService } from '../service/movie.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata: Logindata;
  

  constructor(private userservice: UserService, private route: ActivatedRoute, 
    private router: Router, private login:MatDialog) {
    // window.localStorage.clear();
  }

  ngOnInit(): void {
    
  }

  loginFormGroup = new FormGroup({
    "emailId": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required])
  });

  loginCheck() {
    window.localStorage.clear();
    this.logindata = this.loginFormGroup.value;
    this.userservice.logincheck(this.logindata).subscribe(
      success => { 
        console.log(success);
        window.localStorage.setItem('tgt', success.token);
        window.localStorage.setItem('tgt_emailId', success.email);
        window.localStorage.setItem('tgt_userName', success.name);
        window.localStorage.setItem('tgt_userRole', success.role);
        console.log("emailid: "+ window.localStorage.getItem('tgt_emailId'));
        console.log("userrole: "+ window.localStorage.getItem('tgt_userRole'));
        let userRole=window.localStorage.getItem('tgt_userRole');
        console.log(userRole);
        if(userRole == "ROLE_USER"){
          this.router.navigate(['/']);
          this.login.open(Dialogbox1Component);
        }
        else if (userRole == "ROLE_ADMIN"){
          this.router.navigate(['/adminhome']);
          this.login.open(DialogwelcomeadminComponent);
        }
      },
      error => {
        console.log(error);
        this.login.open(Dialogbox6Component);
    
      });
  }
}
