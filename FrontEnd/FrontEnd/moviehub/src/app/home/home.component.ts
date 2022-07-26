import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogboxComponent } from '../dialodboxmessages/dialogbox/dialogbox.component';
import { Dialogbox4Component } from '../dialodboxmessages/dialogboxfav1/dialogbox4.component';
import { Dialogbox5Component } from '../dialodboxmessages/dialogboxfav2/dialogbox5.component';
import { Dialogbox2Component } from '../dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { Movie } from '../model/movie';
import { Userdata } from '../model/userdata';
import { LogoutService } from '../service/logout.service';
import { MovieService } from '../service/movie.service';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private movieService: MovieService, private route: ActivatedRoute, 
    private router: Router, private home:MatDialog, private logoutservice: LogoutService,
    private userService:UserService) { }

  email:string=window.localStorage.getItem('tgt_emailId');
  username:string=window.localStorage.getItem('tgt_userName');
  userRole:string=window.localStorage.getItem('tgt_userRole');

  movie: Movie[];

  g1:string="Action";
  g2:string="Animation";
  g3:string="Adventure";
  g4:string="Comedy";
  g5:string="Crime";
  g6:string="Family";
  g7:string="Fantasy";
  g8:string="History";
  g9:string="Horror";
  g10:string="Music";
  g11:string="Mystery";
  g12:string="Romance";
  g13:string="Thriller";
  g14:string="War";
  
  total:number;
  user:Userdata;
ngOnInit(): void {
  this.movieService.getAllMovies().subscribe(result => this.movie = result);
  this.movieService.getTotalMovies().subscribe(result => this.total = result);
  this.userService.getUserDetails().subscribe(result => this.user=result);
 
}

// @ViewChild('searchText') inputNames: any; // accessing the reference element

// handleClear(){
//     // clearing the value
//   this.searchText.nativeElement.value = ' ';
// }

addToFavorite(movieId:string){
  if(this.userRole == "ROLE_USER"){
    this.movieService.addToFavorite(movieId).subscribe( 
      response => {
        this.home.open(Dialogbox4Component);
      },
      error =>{
        this.home.open(Dialogbox5Component);
      });
  }
  else{
    this.home.open(DialogboxComponent);
  }
 
}

//get movie details
getMovieDetails(movieId:string){
  let x=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result =>  this.movie = result);
  this.router.navigate(['/movie'],{queryParams:{movieId: x}} ); 
            
}

//playing movie
playMovie(movieId:string){
  let y=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result => this.movie = result);
  this.router.navigate(['/video'],{queryParams:{movieId: y}} );
}

// find movie by genre
getAction(g1:string){
  this.movieService.getMoviesByGenre(g1).subscribe(result => this.movie = result);
}
getAnimation(g2:string){
  this.movieService.getMoviesByGenre(g2).subscribe(result => this.movie = result);
}
getAdventure(g3:string){
  this.movieService.getMoviesByGenre(g3).subscribe(result => this.movie = result);
}
getComedy(g4:string){
  this.movieService.getMoviesByGenre(g4).subscribe(result => this.movie = result);
}
getCrime(g5:string){
  this.movieService.getMoviesByGenre(g5).subscribe(result => this.movie = result);
}
getFamily(g6:string){
  this.movieService.getMoviesByGenre(g6).subscribe(result => this.movie = result);
}
getFantasy(g7:string){
  this.movieService.getMoviesByGenre(g7).subscribe(result => this.movie = result);
}
getHistory(g8:string){
  this.movieService.getMoviesByGenre(g8).subscribe(result => this.movie = result);
}
getHorror(g9:string){
  this.movieService.getMoviesByGenre(g9).subscribe(result => this.movie = result);
}
getMusic(g10:string){
  this.movieService.getMoviesByGenre(g10).subscribe(result => this.movie = result);
}
getMystery(g11:string){
  this.movieService.getMoviesByGenre(g11).subscribe(result => this.movie = result);
}
getRomance(g12:string){
  this.movieService.getMoviesByGenre(g12).subscribe(result => this.movie = result);
}
getThriller(g13:string){
  this.movieService.getMoviesByGenre(g13).subscribe(result => this.movie = result);
}
getWar(g14:string){
  this.movieService.getMoviesByGenre(g14).subscribe(result => this.movie = result);
}


 // find movie by first letter
title:string;

@ViewChild('searchText') searchText: ElementRef;
findMovie() {
  console.log(this.searchText.nativeElement.value);
  let title=this.searchText.nativeElement.value;
  this.movieService.getMovieByTitleFirstLetter(title).subscribe(result => this.movie = result);
}


logout(){
  this.logoutservice.logout();
  this.router.navigate(['/login']);
  this.home.open(Dialogbox2Component);
}
}
