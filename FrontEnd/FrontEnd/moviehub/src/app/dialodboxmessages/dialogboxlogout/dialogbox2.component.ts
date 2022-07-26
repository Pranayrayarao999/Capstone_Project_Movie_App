import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogbox2',
  templateUrl: './dialogbox2.component.html',
  styleUrls: ['./dialogbox2.component.css']
})
export class Dialogbox2Component implements OnInit {

  username=window.localStorage.getItem('tgt_userName');
  constructor() { }

  ngOnInit(): void {
  }

}
