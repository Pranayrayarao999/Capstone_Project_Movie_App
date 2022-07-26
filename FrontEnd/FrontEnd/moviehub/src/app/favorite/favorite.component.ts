import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Dialogbox2Component } from '../dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { DialogboxremoveComponent } from '../dialodboxmessages/dialogboxremove/dialogboxremove.component';
import { Movie } from '../model/movie';
import { Userdata } from '../model/userdata';
import { LogoutService } from '../service/logout.service';
import { MovieService } from '../service/movie.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  movie:Movie[];

  constructor(private logoutservice:LogoutService, private movieService:MovieService,
    private favorite:MatDialog,  private router:Router, private userService:UserService) { }
    total:number; 
    user:Userdata;
    
  ngOnInit(): void {
    this.movieService.getFromFavorite().subscribe(result => this.movie = result);
    this.userService.totalFavoriteMovie().subscribe(result => this.total=result);
    this.userService.getUserDetails().subscribe(result => this.user=result);
  }
username=window.localStorage.getItem('tgt_userName');

removeFavorite(movieId:string){
  this.movieService.removeFromFavorite(movieId).subscribe(
    response => { 
      // alert("Movie is Removed from Favorite");
      this.favorite.open(DialogboxremoveComponent); 
      this.ngOnInit();
    });
}

getFavorite(){
  this.movieService.getFromFavorite().subscribe(result => this.movie = result);
}

getMovieDetails(movieId:string){
  let x=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result =>  this.movie= result);
  this.router.navigate(['/movies'],{queryParams:{movieId: x}} ); 
}

logout(){
  this.logoutservice.logout();
  this.favorite.open(Dialogbox2Component);
}

//playing movie
playMovie(movieId:string){
  let y=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result => this.movie = result);
  this.router.navigate(['/video'],{queryParams:{movieId: y}} );
}
}
