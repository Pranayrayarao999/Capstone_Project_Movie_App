import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogbox2Component } from 'src/app/dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { DialogboxupdateComponent } from 'src/app/dialodboxmessages/dialogboxupdate/dialogboxupdate.component';
import { Movie } from 'src/app/model/movie';
import { LogoutService } from 'src/app/service/logout.service';
import { UserService } from 'src/app/service/user.service';
import { DialogmovieupdateComponent } from '../dialogbox/dialogmovieupdate/dialogmovieupdate.component';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

  movieId:string;
  constructor(private userService: UserService, private logoutservice: LogoutService,  
              private router: Router, private route: ActivatedRoute, 
              private updatemovie:MatDialog) {

                this.movieId = route.snapshot.queryParamMap.get("movieId");          
              }

  ngOnInit(): void {
  }

  updateMovieFormGroup = new FormGroup({ 
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
  updateMovie(){
    console.log(this.updateMovieFormGroup.value);
    this.movie = this.updateMovieFormGroup.value;
    console.log(this.movie);
    this.userService.updateMovie(this.movie).subscribe(
      result => {
        console.log("Updated");
        // alert("Profile Updated");
        this.updatemovie.open(DialogmovieupdateComponent);
        this.router.navigate(['/delete']);
      });
  }

  logout(){
    this.logoutservice.logout();
    this.updatemovie.open(Dialogbox2Component);
  }
}
