import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialogbox2Component } from '../dialodboxmessages/dialogboxlogout/dialogbox2.component';

import { Userdata } from '../model/userdata';
import { LogoutService } from '../service/logout.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username=window.localStorage.getItem('tgt_userName');
  email=window.localStorage.getItem('tgt_emailId');
  
  constructor(private logoutservice: LogoutService,  private profile:MatDialog, private userService:UserService) { }

  // user:Userdata[];
  user:Userdata;
 
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(result => this.user=result);
   
  }

  logout(){
    this.logoutservice.logout();
    this.profile.open(Dialogbox2Component);
  }
  uploadProfilePic(event:any){

  }
  getImage(){
    
  }
}
