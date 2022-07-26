import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogbox1',
  templateUrl: './dialogbox1.component.html',
  styleUrls: ['./dialogbox1.component.css']
})
export class Dialogbox1Component implements OnInit {

  username=window.localStorage.getItem('tgt_userName');
  
  constructor() { }

  ngOnInit(): void {
  }

}
