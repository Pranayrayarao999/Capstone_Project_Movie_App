import { Component, OnInit } from '@angular/core';
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
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private movieService:MovieService, private trending:MatDialog,
    private route: ActivatedRoute, private router: Router,
    private logoutService:LogoutService, private userService:UserService) { }


    email:string=window.localStorage.getItem('tgt_emailId');
    username:string=window.localStorage.getItem('tgt_userName');
    userRole:string=window.localStorage.getItem('tgt_userRole');

  movie:Movie[];
  user:Userdata;
  
  ngOnInit(): void {
    this.movieService.getMovieByCategoryTrending().subscribe(result => this.movie = result);
    this.userService.getUserDetails().subscribe(result => this.user=result);
  }

  addToFavorite(){
    this.trending.open(DialogboxComponent);
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

logout(){
  this.logoutService.logout();
  this.router.navigate(['/login']);
  this.trending.open(Dialogbox2Component);
}
}
