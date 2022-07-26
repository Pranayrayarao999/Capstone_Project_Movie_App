import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
// import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  moviebaseurl:string="http://localhost:65100/movieApp";
  usermovieurl:string="http://localhost:65100/movieUser";

  // moviebaseurl:string="http://localhost:64000/movieApp";
  // usermovieurl:string="http://localhost:64000/movieUser";

   // http://localhost:65100/movieApp/getAllMovie  (get)

  getAllMovies() {
    return this.httpClient.get<any>(this.moviebaseurl + "/getAllMovie");
  }

   // http://localhost:65100/movieApp/getMovieTotal  (get)
   getTotalMovies(){
    return this.httpClient.get<any>(this.moviebaseurl + "/getMovieTotal");
  }

    
   // http://localhost:65100/movieUser/favorite/addfavorite/{emailId}/{movieId} (post)
  addToFavorite( data:string){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
    return this.httpClient.post<any>(this.usermovieurl + "/favorite/addfavorite/" + window.localStorage.getItem('tgt_emailId') +"/"+ data, { 'headers': reqHeader });
   }

    // http://localhost:65100/movieUser/favorite/remove/{emailId}/{movieId}  (delete)
   removeFromFavorite(movieId:string) {
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
    return this.httpClient.delete<any>(this.usermovieurl + "/favorite/remove/" + window.localStorage.getItem('tgt_emailId') +"/"+ movieId, { 'headers': reqHeader });
  }

  // http://localhost:65100/movieUser/favorite/favorites/{emailId}  (get)
  getFromFavorite(){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
    return this.httpClient.get<any>(this.usermovieurl + "/favorite/favorites/" + window.localStorage.getItem('tgt_emailId'), { 'headers': reqHeader });
  }

 // http://localhost:65100/movieApp/movieByFirstLetter/{movieTitle}  (get)

 getMovieByTitleFirstLetter(data:string){
    return this.httpClient.get<any>(this.moviebaseurl + "/movieByFirstLetter/"+ data);
  }

  // http://localhost:65100/movieApp/movieByDirector/{directorName}  (get)

  getMovieByDirectorFirst(data:string){
      return this.httpClient.get<any>(this.moviebaseurl + "/movieByDirector/"+ data);
  }
  
  // http://localhost:65100/movieApp/movieByActor/{actorName}  (get)
  getMovieByActorFirst(data:string){
    return this.httpClient.get<any>(this.moviebaseurl + "/movieByActor/"+ data);
  }

   // http://localhost:65100/movieApp/movieByCategory/{category}  (get)

  getMovieByCategoryPopular(){
    return this.httpClient.get<any>(this.moviebaseurl + "/movieByCategory/Popular");
  }
  getMovieByCategoryTrending(){
    return this.httpClient.get<any>(this.moviebaseurl + "/movieByCategory/Trending");
  }

   // http://localhost:65100/movieApp/movieId/{movieId}  (get)

   getMoviesById(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/movieId/" + data );
   }

   getMoviesByTitle(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/title/" + data );
  }

  getMoviesByDirector(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/directorName/" + data );
  }

  getMoviesByActor(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/actorName/" + data );
  }

  getMoviesByActress(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/actressName/" + data ); 
  }

  getMoviesByGenre(data:string){
    return this.httpClient.get<any>(this.moviebaseurl + "/genre/" + data); 
  }
 
  getMoviesByReleaseYear(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/releaseYear/" + data );
  }

  getMoviesByLanguage(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/language/" + data );
  }

  getMoviesBycertification(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/certification/" + data );
  }

   // http://localhost:65100/movieApp/releaseYear/{releaseYear} (get)

   getMovieByReleaseYear(data: string){
    return this.httpClient.get<any>(this.moviebaseurl + "/releaseYear/" + data );
   }

   // usermovieurl:string="http://localhost:65100/movieUser";

  // http://localhost:65100/movieUser/watchlater/add/{emailId}/{movieId} (post)

  addToWatchLaterList( data:string){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
    return this.httpClient.post<any>(this.usermovieurl + "/watchlater/add/" + window.localStorage.getItem('tgt_emailId') +"/"+ data, { 'headers': reqHeader });
   }
   
    // http://localhost:65100/movieUser/watchlater/remove/{emailId}/{movieId}  (delete)
   removeFromWatchLaterList(movieId:string) {
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
    return this.httpClient.delete<any>(this.usermovieurl + "/watchlater/remove/" + window.localStorage.getItem('tgt_emailId') +"/"+ movieId, { 'headers': reqHeader });
  }

   // http://localhost:65100/movieUser/watchlater/getwatchlater/{emailId}  (get)
  getFromWatchLaterList(){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('tgt'));
    return this.httpClient.get<any>(this.usermovieurl + "/watchlater/getwatchlater/" + window.localStorage.getItem('tgt_emailId'), { 'headers': reqHeader });
  }

 // http://localhost:65100/movieUser/totalWatchLater/{emailId}  (get)
  totalWatchLaterMovie() {
    return this.httpClient.get<any>(this.usermovieurl + "/totalWatchLater/" + window.localStorage.getItem('tgt_emailId'));
  }
}
