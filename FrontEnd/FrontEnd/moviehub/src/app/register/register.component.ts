import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogbox3Component } from '../dialodboxmessages/dialogboxregister1/dialogbox3.component';
import { Dialogbox7Component } from '../dialodboxmessages/dialogboxregister2/dialogbox7.component';
import { Registerdata } from '../model/registerdata';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerdata:Registerdata;

  constructor(private userservice: UserService, private route: ActivatedRoute, 
    private router: Router,  private register:MatDialog,
    private http: HttpClient) {
    window.localStorage.clear();
  }

  registerFormGroup = new FormGroup({ 
    emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    userName: new FormControl('', [Validators.required, Validators.pattern("^([A-Za-z]{2,10})$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})$")]),
    city: new FormControl('', [Validators.required, Validators.pattern("^([A-Za-z]{2,10})$")]),
    profileUrl: new FormControl('', [Validators.required])
  });
 
  registerCheck(){
    console.log(this.registerFormGroup.value);
    // store form data into model object
    let picture:string;
    if(this.registerFormGroup.value.profileUrl=="1")
    {
      this.registerFormGroup.value.profileUrl="./../assets/profile/profile1.jpg";
    }
    else if(this.registerFormGroup.value.profileUrl=="2")
    {
      this.registerFormGroup.value.profileUrl="./../assets/profile/profile7.jpg";
    }
    else if(this.registerFormGroup.value.profileUrl=="3")
    {
      this.registerFormGroup.value.profileUrl="./../assets/profile/profile8.jpg";
    }
    else if(this.registerFormGroup.value.profileUrl=="4")
    {
      this.registerFormGroup.value.profileUrl="./../assets/profile/profile9.jpg";
    }
    console.log("profileurl+" +this.registerFormGroup.value.profileUrl);
    this.registerdata = this.registerFormGroup.value;
    console.log("reg data" +this.registerdata);
    this.userservice.registerUser(this.registerdata).subscribe(
      response => {
        console.log(response);
        this.register.open(Dialogbox3Component);
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.register.open(Dialogbox7Component);
      })
  }

  ngOnInit(): void {
  }

  get emailId() {
    return this.registerFormGroup.get('emailId');
  }
  get userName() {
    return this.registerFormGroup.get('userName');
  }
  get password() {
    return this.registerFormGroup.get('password');
  }
  get city() {
    return this.registerFormGroup.get('city');
  }
  get ProfileUrl(){
    return this.registerFormGroup.get('profileUrl');
  }

image!: any;
url:any="";


onuploadimage(event:any){
  console.log(event)
  if(!event.target.files[0] || event.target.files[0].length==0){
    return;
  }
  let mimeType=event.target.files[0].type;
  if(mimeType.match(/image\/*/)==null){
    return;
  }
  let reader=new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (_event)=>{
    this.url=reader.result;
    console.log(this.url)
    this.image=this.url
  }
}



// uploadProfile(event:any){
//   if(event.target.files){
//     var reader=new FileReader();
//     reader.readAsDataURL(event.target.files[0]);
//     reader.onload=(event:any)=>{
//       this.url=event.target.result;
//     }
//   }
// }

profileUrl:any="";
uploadProfile(event:any) {
    console.log(event.target.files);
    this.profileUrl = event.target.files; 
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
