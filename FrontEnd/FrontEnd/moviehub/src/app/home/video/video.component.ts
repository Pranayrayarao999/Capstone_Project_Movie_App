import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogbox4Component } from 'src/app/dialodboxmessages/dialogboxfav1/dialogbox4.component';
import { Dialogbox5Component } from 'src/app/dialodboxmessages/dialogboxfav2/dialogbox5.component';
import { DialogwatchaddComponent } from 'src/app/dialodboxmessages/dialogwatchadd/dialogwatchadd.component';
import { DialogwatchexistComponent } from 'src/app/dialodboxmessages/dialogwatchexist/dialogwatchexist.component';
import { DialogwatchloginComponent } from 'src/app/dialodboxmessages/dialogwatchlogin/dialogwatchlogin.component';
import { DialogboxComponent } from '../../dialodboxmessages/dialogbox/dialogbox.component';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  movie:Movie[];
  movieUrl:string;
  y:string;

  email:string=window.localStorage.getItem('tgt_emailId');
  username:string=window.localStorage.getItem('tgt_userName');
  userRole:string=window.localStorage.getItem('tgt_userRole');
  
  constructor(private movieService: MovieService, private router: ActivatedRoute,
    private video:MatDialog, private route: Router) {
    this.movieId = router.snapshot.queryParamMap.get("movieId");
   }

  movieId:string;
  ngOnInit(): void {
    this.movieService.getMoviesById(this.movieId).subscribe(result => this.movie = result)
  }
  addToFavorite(movieId:string){
    if(this.userRole == "ROLE_USER"){
      this.movieService.addToFavorite(movieId).subscribe( 
        response => {
          this.video.open(Dialogbox4Component);
        },
        error =>{
          this.video.open(Dialogbox5Component);
        });
    }
    else{
      this.video.open(DialogboxComponent);
    }
  }

  addToWatchList(movieId:string){
    if(this.userRole == "ROLE_USER"){
      this.movieService.addToWatchLaterList(movieId).subscribe( 
        response => {
          this.video.open(DialogwatchaddComponent);
        },
        error =>{
          this.video.open(DialogwatchexistComponent);
        });
    }
    else{
      this.video.open(DialogwatchloginComponent);
    }

  }

  getMovieDetails(movieId:string){
    let x=movieId;
    this.movieService.getMoviesById(movieId).subscribe(result =>  this.movie = result);
    this.route.navigate(['/movie'],{queryParams:{movieId: x}} );           
  }
}
