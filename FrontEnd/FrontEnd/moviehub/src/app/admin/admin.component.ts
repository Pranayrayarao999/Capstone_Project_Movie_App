import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
import { UserService } from '../service/user.service';
import { LogoutService } from '../service/logout.service';
import { Dialogbox2Component } from '../dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { DialogmovieexistComponent } from './dialogbox/dialogmovieexist/dialogmovieexist.component';
import { DialogadminaddComponent } from './dialogbox/dialogadminadd/dialogadminadd.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userservice: UserService, private logoutservice: LogoutService,  
    private router: Router,  private admin:MatDialog) { }

  ngOnInit(): void {
  }
  

  movieFormGroup = new FormGroup({ 
    movieId: new FormControl('', [Validators.required]),
    movieTitle: new FormControl('', [Validators.required]),
    directorName: new FormControl('', [Validators.required]),
    actorName: new FormControl('', [Validators.required]),
    actressName: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    certification: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    movieUrl: new FormControl('', [Validators.required])

  });

  movie:Movie;

  addMovie(){
    this.movie = this.movieFormGroup.value;
    console.log(this.movie);
    this.userservice.addMovie(this.movie).subscribe(
      response => {
        console.log("User registration success");
        console.log(response);
        this.admin.open(DialogadminaddComponent);
      },
      error => {
        console.log(error);
        alert("error");
        this.admin.open(DialogmovieexistComponent);
       
      })
  }

  get movieId() {
    return this.movieFormGroup.get('movieId');
  }
  get movieTitle() {
    return this.movieFormGroup.get('movieTitle');
  }
  get directorName() {
    return this.movieFormGroup.get('directorName');
  }
  get actorName() {
    return this.movieFormGroup.get('actorName');
  }
  get actressName() {
    return this.movieFormGroup.get('actressName');
  }
  get genre() {
    return this.movieFormGroup.get('genre');
  }
  get duration() {
    return this.movieFormGroup.get('duration');
  }
  get releaseYear() {
    return this.movieFormGroup.get('releaseYear');
  }
  get language() {
    return this.movieFormGroup.get('language');
  }
  get certification() {
    return this.movieFormGroup.get('certification');
  }
  get imageUrl() {
    return this.movieFormGroup.get('imageUrl');
  }
  get movieUrl() {
    return this.movieFormGroup.get('movieUrl');
  }
  logout(){
    this.logoutservice.logout();
    this.admin.open(Dialogbox2Component);
  }
}
