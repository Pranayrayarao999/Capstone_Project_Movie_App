import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logindata } from '../model/logindata';
import { Movie } from '../model/movie';
import { Registerdata } from '../model/registerdata';
import { Updatedata } from '../model/updatedata';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  movieuserbaseurl: string = "http://localhost:65100/movieUser";
  // movieuserbaseurl: string = "http://localhost:64000/movieUser";


  // http://localhost:65100/movieUser/register  (post)
  registerUser(data: Registerdata){
    return this.httpClient.post<any>(this.movieuserbaseurl + "/register", data);
  }

  // http://localhost:65100/movieUser/totalFavorite/{emailId}  (get)
  totalFavoriteMovie() {
    return this.httpClient.get<any>(this.movieuserbaseurl + "/totalFavorite/" + window.localStorage.getItem('tgt_emailId'));
  }



  // userbaseurl = "http://localhost:64000/user";
  userbaseurl = "http://localhost:65200/user";  // Gateway port: 64000

  // http://localhost:65200/user/login  (post)
  logincheck(data: Logindata) {
    return this.httpClient.post<any>(this.userbaseurl + "/login", data);
  }

  updatedata: Updatedata;

  // http://localhost:65100/movieUser/update/{emailId}/{userName}/{password}/{city}  (get)
  updateUser(data: Updatedata) {
    // let picture:string;
    // if(data.profileUrl=="1")
    // {
    //   picture=".\/..\/assets\/profile\/profile1.jpg";
    // }
    // else if(data.profileUrl=="2")
    // {
    //   picture="./../assets/profile/profile7.jpg";
    // }
    // else if(data.profileUrl=="3")
    // {
    //   picture="./../assets/profile/profile8.jpg";
    // }
    // else if(data.profileUrl=="4")
    // {
    //   picture="./../assets/profile/profile9.jpg";
    // }
    console.log("ref2" +data.profileUrl);
    // console.log(picture);
    return this.httpClient.post<any>(this.movieuserbaseurl + "/update/" + window.localStorage.getItem('tgt_emailId')
      + "/" + data.userName + "/" + data.password + "/" + data.city + "/" +data.profileUrl, data);
  }

  // http://localhost:65100/movieUser/userDetails/{emailId}  (get)
  getUserDetails() {
    return this.httpClient.get<any>(this.movieuserbaseurl + "/userDetails/" + window.localStorage.getItem('tgt_emailId'));
  }

  // http://localhost:65100/movieUser/userDetails/recommendation/{emailId} (get)
  getUserRecommendation() {
    return this.httpClient.get<any>(this.movieuserbaseurl + "/userDetails/recommendation/" + window.localStorage.getItem('tgt_emailId'));
  }


  // adminUrl = "http://localhost:64000/movieApp";
  adminUrl = "http://localhost:65100/movieApp";

  // http://localhost:65100/movieApp/addMovie  (post)
  addMovie(data: Movie) {
    return this.httpClient.post<any>(this.adminUrl + "/addMovie", data);
  }

  // http://localhost:65100/movieApp/delete/{movieId}  (delete)
  deleteMovie(data: string) {
    return this.httpClient.delete<any>(this.adminUrl + "/delete/" + data);
  }

  // http://localhost:65100/movieApp/update (put)
  updateMovie(data: Movie) {
    return this.httpClient.put<any>(this.adminUrl + "/update", data);
  }

}
