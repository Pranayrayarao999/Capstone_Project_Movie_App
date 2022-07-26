import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Dialogbox2Component } from 'src/app/dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { Movie } from 'src/app/model/movie';
import { LogoutService } from 'src/app/service/logout.service';
import { MovieService } from 'src/app/service/movie.service';
import { UserService } from 'src/app/service/user.service';
import { DialogadmindeleteComponent } from '../dialogbox/dialogadmindelete/dialogadmindelete.component';




@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

  c1:string="U";
  c2:string="UA";
  c3:string="A";

  l1:string="English";
  l2:string="Tamil";
  l3:string="Hindi";
  l4:string="Telugu";
  l5:string="Malyalam";


  constructor(private movieService:MovieService, private deletemovie:MatDialog,
   private userService:UserService,  private router:Router,
   private logoutservice: LogoutService) { }
  
  movie:Movie[];
  // total:number;

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(result => this.movie = result);
    // this.movieService.getTotalMovies().subscribe(result => this.total = result);

  }
  deleteMovie(movieId:string){
    this.userService.deleteMovie(movieId).subscribe(
      response => { 
        console.log("deleted");
        this.deletemovie.open(DialogadmindeleteComponent); 
        this.ngOnInit();
      });
  }

  updateMovie(movieId:string){
    let x=movieId;
    this.movieService.getMoviesById(movieId).subscribe(result =>  this.movie = result);
    this.router.navigate(['/update'],{queryParams:{movieId: x}} ); 
  }

  logout(){
    this.logoutservice.logout();
    this.deletemovie.open(Dialogbox2Component);
  }



  // search option

  findU(c1:string){
    this.movieService.getMoviesBycertification(c1).subscribe(result => this.movie = result);
  }
  findUA(c2:string){
    this.movieService.getMoviesBycertification(c2).subscribe(result => this.movie = result);
  }
  findA(c3:string){
    this.movieService.getMoviesBycertification(c3).subscribe(result => this.movie = result);
  }

  findEnglish(l1:string){
    this.movieService.getMoviesByLanguage(l1).subscribe(result => this.movie = result);
  }
  findTamil(l2:string){
    this.movieService.getMoviesByLanguage(l2).subscribe(result => this.movie = result);
  }
  findHindi(l3:string){
    this.movieService.getMoviesByLanguage(l3).subscribe(result => this.movie = result);
  }
  findTelugu(l4:string){
    this.movieService.getMoviesByLanguage(l4).subscribe(result => this.movie = result);
  }
  findMalayalam(l5:string){
    this.movieService.getMoviesByLanguage(l5).subscribe(result => this.movie = result);
  }


  name:string;
@ViewChild('searchText1') searchText1: ElementRef;
findByDirectorName() {
  console.log(this.searchText1.nativeElement.value);
  let name=this.searchText1.nativeElement.value;
  this.movieService.getMovieByDirectorFirst(name).subscribe(result => this.movie = result);
}

name2:string;
@ViewChild('searchText2') searchText2: ElementRef;
findByActorName() {
  console.log(this.searchText2.nativeElement.value);
  let name2=this.searchText2.nativeElement.value;
  this.movieService.getMovieByActorFirst(name2).subscribe(result => this.movie = result);
}

name3:string;
@ViewChild('searchText3') searchText3: ElementRef;
findByReleaseYear(){
  let name3=this.searchText3.nativeElement.value;
  this.movieService.getMoviesByReleaseYear(name3).subscribe(result => this.movie = result);
}
}
