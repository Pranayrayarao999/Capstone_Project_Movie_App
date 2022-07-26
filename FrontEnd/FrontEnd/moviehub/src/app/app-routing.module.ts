import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './home/moviedetails/moviedetails.component';
import { PopularComponent } from './home/popular/popular.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TrendingComponent } from './home/trending/trending.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { VideoComponent } from './home/video/video.component';
import { RecommendationComponent } from './home/recommendation/recommendation.component';
import { AdminComponent } from './admin/admin.component';
import { DeletemovieComponent } from './admin/deletemovie/deletemovie.component';
import { UpdatemovieComponent } from './admin/updatemovie/updatemovie.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';


const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path:'favorite', component: FavoriteComponent},
  {path:'register', component: RegisterComponent},
  {path:'popular', component: PopularComponent},
  {path:'trending', component: TrendingComponent},
  {path:'movie', component: MoviedetailsComponent},
  {path:'profile', component: ProfileComponent},
  {path:'updateprofile', component: UpdateprofileComponent},
  {path:'video', component: VideoComponent},
  {path:'recommendation', component: RecommendationComponent},
  {path:'admin', component: AdminComponent},
  {path:'delete', component: DeletemovieComponent},
  {path:'update', component: UpdatemovieComponent},
  {path:'adminhome', component: AdminhomeComponent},
  {path:'reset', component: ForgotpasswordComponent},
  {path:'watchlater', component: WatchlaterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
