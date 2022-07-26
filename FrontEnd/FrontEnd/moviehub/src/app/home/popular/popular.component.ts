import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogbox2Component } from 'src/app/dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { Userdata } from 'src/app/model/userdata';
import { LogoutService } from 'src/app/service/logout.service';
import { UserService } from 'src/app/service/user.service';
import { DialogboxComponent } from '../../dialodboxmessages/dialogbox/dialogbox.component';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {


  email:string=window.localStorage.getItem('tgt_emailId');
  username:string=window.localStorage.getItem('tgt_userName');
  userRole:string=window.localStorage.getItem('tgt_userRole');
  
  constructor(private movieService:MovieService, private popular:MatDialog,
    private route: ActivatedRoute, private router: Router,
    private logoutService:LogoutService, private userService:UserService) { }

  movie:Movie[];

  c1:string="U";
  c2:string="UA";
  c3:string="A";

  l1:string="English";
  l2:string="Tamil";
  l3:string="Hindi";
  l4:string="Telugu";
  l5:string="Malyalam";

  ct1:string="Popular";
  user:Userdata;
  ngOnInit(): void {
    this.movieService.getMovieByCategoryPopular().subscribe(result => this.movie = result);
    this.userService.getUserDetails().subscribe(result => this.user=result);
  }

  addToFavorite(){
    this.popular.open(DialogboxComponent);
    }
  getMovieDetails(movieId:string){
    let x=movieId;
    // alert(x);
    this.movieService.getMoviesById(movieId).subscribe(result =>  this.movie= result);
    this.router.navigate(['/movie'],{queryParams:{movieId: x}} ); 
  }


//playing movie
playMovie(movieId:string){
  let y=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result => this.movie = result);
  this.router.navigate(['/video'],{queryParams:{movieId: y}} );
}

//find by certification
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

logout(){
  this.logoutService.logout();
  this.router.navigate(['/login']);
  this.popular.open(Dialogbox2Component);
}
}
