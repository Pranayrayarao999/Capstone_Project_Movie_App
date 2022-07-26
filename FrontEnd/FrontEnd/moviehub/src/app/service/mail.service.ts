import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Maildata } from '../model/maildata';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

    mailbaseurl: string="http://localhost:65200/user"

       // http://localhost:65200/user/recoverPassword/{emailId}  (get)

      getUserPassword(data:string){
        console.log("error msg :"+ this.httpClient.get<any>(this.mailbaseurl + "/recoverPassword/"+ data));
        return this.httpClient.get<any>(this.mailbaseurl + "/recoverPassword/"+ data);
      }
}
