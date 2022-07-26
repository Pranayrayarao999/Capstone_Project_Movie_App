import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialogbox4Component } from 'src/app/dialodboxmessages/dialogboxfav1/dialogbox4.component';
import { Dialogbox5Component } from 'src/app/dialodboxmessages/dialogboxfav2/dialogbox5.component';
import { DialogboxComponent } from '../../dialodboxmessages/dialogbox/dialogbox.component';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit  {
  movie:Movie[];
  movieId:string;
  x:string;

  email:string=window.localStorage.getItem('tgt_emailId');
  username:string=window.localStorage.getItem('tgt_userName');
  userRole:string=window.localStorage.getItem('tgt_userRole');

    constructor(private movieService:MovieService, private route: ActivatedRoute,
      private moviedetails:MatDialog, private router: Router) { 
      
      this.movieId = route.snapshot.queryParamMap.get("movieId");
    
    }

  ngOnInit(): void {

    this.movieService.getMoviesById(this.movieId).subscribe(result => this.movie = result);
  }


  addToFavorite(movieId:string){
    if(this.userRole == "ROLE_USER"){
      this.movieService.addToFavorite(movieId).subscribe( 
        response => {
          this.moviedetails.open(Dialogbox4Component);
        },
        error =>{
          this.moviedetails.open(Dialogbox5Component);
        });
    }
    else{
      this.moviedetails.open(DialogboxComponent);
    }
  }

  //playing movie
playMovie(movieId:string){
  let y=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result => this.movie = result);
  this.router.navigate(['/video'], {queryParams:{movieId: y}} );
}
}



