import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Maildata } from '../model/maildata';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private mailService:MailService) { }

  ngOnInit(): void {
  }
  email:string;
  password:string;
  @ViewChild('searchText') searchText: ElementRef;
  recoverPassword() {
    // console.log(this.searchText.nativeElement.value);
    let email=this.searchText.nativeElement.value;
    this.mailService.getUserPassword(email).subscribe(result => this.password = result);
  }
}
