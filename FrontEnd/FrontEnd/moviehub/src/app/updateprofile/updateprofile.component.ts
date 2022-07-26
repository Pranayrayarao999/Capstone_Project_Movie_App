import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxupdateComponent } from '../dialodboxmessages/dialogboxupdate/dialogboxupdate.component';
import { Updatedata } from '../model/updatedata';
import { Userdata } from '../model/userdata';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})


export class UpdateprofileComponent implements OnInit {

  constructor(private router: Router, private userService:UserService,
    private updateprofile:MatDialog) { }

  email=window.localStorage.getItem('tgt_emailId');
  user:Userdata;
  
 
  ngOnInit(): void {

    this.userService.getUserDetails().subscribe(result => this.user=result);
  }

 
 updatedata: Updatedata;

  updateFormGroup = new FormGroup({ 
    emailId: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required, Validators.pattern("^([A-Za-z]{2,10})$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})$")]),
    city: new FormControl('', [Validators.required, Validators.pattern("^([A-Za-z]{2,10})$")]),
    profileUrl: new FormControl('',[Validators.required, Validators.pattern("^([1-4]{1})$")]),
  });
      
 
  updateProfile(){
    console.log(this.updateFormGroup.value);

    // if(this.updateFormGroup.value.profileUrl=="1")
    // {
    //   this.updateFormGroup.value.profileUrl="./../assets/profile/profile1.jpg";
    // }
    // else if(this.updateFormGroup.value.profileUrl=="2")
    // {
    //   this.updateFormGroup.value.profileUrl="./../assets/profile/profile7.jpg";
    // }
    // else if(this.updateFormGroup.value.profileUrl=="3")
    // {
    //   this.updateFormGroup.value.profileUrl="./../assets/profile/profile8.jpg";
    // }
    // else if(this.updateFormGroup.value.profileUrl=="4")
    // {
    //   this.updateFormGroup.value.profileUrl="./../assets/profile/profile9.jpg";
    // }
    this.updatedata = this.updateFormGroup.value;
    console.log("ref" +this.updatedata.profileUrl);
    this.userService.updateUser(this.updatedata).subscribe(
      result => {
        console.log("Updated");
        this.updateprofile.open(DialogboxupdateComponent);
        this.router.navigate(['/profile']);
      });
}

url:any="";
profileUrl:any="";
uploadProfile(event:any) {
    // console.log(event.target.files);
    // this.profileUrl = event.target.files; 
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event)=>{
      this.url=reader.result;
      console.log(this.url)
      this.profileUrl=this.url
  }
}
  files=[ {
    profileId:"1",
    url:"./../assets/profile/profile1.jpg"
  },
  {
    profileId:"2",
    url:"./../assets/profile/profile7.jpg"
  },
  {
    profileId:"3",
    url:"./../assets/profile/profile8.jpg"
  },
  {
    profileId:"4",
    url:"./../assets/profile/profile9.jpg"
  }

  ]


 

}


