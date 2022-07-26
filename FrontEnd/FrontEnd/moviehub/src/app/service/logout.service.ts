import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  
  public logout() {
    window.localStorage.clear();
    // alert("Logout");
  
  }
}
