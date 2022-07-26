import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Userdata } from 'src/app/model/userdata';
import { Dialogbox4Component } from '../../dialodboxmessages/dialogboxfav1/dialogbox4.component';
import { Dialogbox5Component } from '../../dialodboxmessages/dialogboxfav2/dialogbox5.component';
import { Dialogbox2Component } from '../../dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { Movie } from '../../model/movie';
import { LogoutService } from '../../service/logout.service';
import { MovieService } from '../../service/movie.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  username=window.localStorage.getItem('tgt_userName');
  email=window.localStorage.getItem('tgt_emailId');

  movie:Movie[];
  
  constructor(private logoutservice: LogoutService,  private recommendation:MatDialog, 
    private userService:UserService, private movieService:MovieService,
    private route: ActivatedRoute, private router: Router) { }

    user:Userdata;
    
  ngOnInit(): void {
    this.userService.getUserRecommendation().subscribe(result =>  this.movie = result);
    this.userService.getUserDetails().subscribe(result => this.user=result);
  }
  
  logout(){
    this.logoutservice.logout();
    this.recommendation.open(Dialogbox2Component);
  }

  
addToFavorite(movieId:string){
  this.movieService.addToFavorite(movieId).subscribe( 
    response => {
      this.recommendation.open(Dialogbox4Component);
    },
    error =>{
      this.recommendation.open(Dialogbox5Component);
    });

   }


  //get movie details
getMovieDetails(movieId:string){
  let x=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result =>  this.movie = result);
  this.router.navigate(['/movies'],{queryParams:{movieId: x}} ); 
            
}

//playing movie
playMovie(movieId:string){
  let y=movieId;
  this.movieService.getMoviesById(movieId).subscribe(result => this.movie = result);
  this.router.navigate(['/videos'],{queryParams:{movieId: y}} );
}

}
