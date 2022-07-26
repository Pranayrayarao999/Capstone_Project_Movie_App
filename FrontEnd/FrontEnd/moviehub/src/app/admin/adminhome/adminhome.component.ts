import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Dialogbox2Component } from 'src/app/dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { Movie } from 'src/app/model/movie';
import { LogoutService } from 'src/app/service/logout.service';
import { MovieService } from 'src/app/service/movie.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private movieService:MovieService, private deletemovie:MatDialog,
    private userService:UserService,  private router:Router,
    private logoutservice: LogoutService) { }

    movie:Movie[];
    total:number;
    
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(result => this.movie = result);
    this.movieService.getTotalMovies().subscribe(result => this.total = result);
  }

  logout(){
    this.logoutservice.logout();
    this.deletemovie.open(Dialogbox2Component);
  }

}
