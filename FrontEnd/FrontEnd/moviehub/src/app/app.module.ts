import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import { MatChipsModule} from '@angular/material/chips';
import { MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PopularComponent } from './home/popular/popular.component';
import { TrendingComponent } from './home/trending/trending.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviedetailsComponent } from './home/moviedetails/moviedetails.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from './dialodboxmessages/dialogbox/dialogbox.component';
import { Dialogbox1Component } from './dialodboxmessages/dialogboxlogin1/dialogbox1.component';
import { Dialogbox2Component } from './dialodboxmessages/dialogboxlogout/dialogbox2.component';
import { Dialogbox3Component } from './dialodboxmessages/dialogboxregister1/dialogbox3.component';
import { VideoComponent } from './home/video/video.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { Dialogbox4Component } from './dialodboxmessages/dialogboxfav1/dialogbox4.component';
import { Dialogbox5Component } from './dialodboxmessages/dialogboxfav2/dialogbox5.component';
import { Dialogbox6Component } from './dialodboxmessages/dialogboxlogin2/dialogbox6.component';
import { Dialogbox7Component } from './dialodboxmessages/dialogboxregister2/dialogbox7.component';
import { DialogboxupdateComponent } from './dialodboxmessages/dialogboxupdate/dialogboxupdate.component';
import { DialogboxremoveComponent } from './dialodboxmessages/dialogboxremove/dialogboxremove.component';
import { RecommendationComponent } from './home/recommendation/recommendation.component';
import { AdminComponent } from './admin/admin.component';
import { DeletemovieComponent } from './admin/deletemovie/deletemovie.component';
import { UpdatemovieComponent } from './admin/updatemovie/updatemovie.component';
import { DialogmovieexistComponent } from './admin/dialogbox/dialogmovieexist/dialogmovieexist.component';
import { DialogmovieupdateComponent } from './admin/dialogbox/dialogmovieupdate/dialogmovieupdate.component';
import { DialogadminaddComponent } from './admin/dialogbox/dialogadminadd/dialogadminadd.component';
import { DialogadmindeleteComponent } from './admin/dialogbox/dialogadmindelete/dialogadmindelete.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { DialogwelcomeadminComponent } from './admin/dialogbox/dialogwelcomeadmin/dialogwelcomeadmin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { DialogwatchaddComponent } from './dialodboxmessages/dialogwatchadd/dialogwatchadd.component';
import { DialogwatchexistComponent } from './dialodboxmessages/dialogwatchexist/dialogwatchexist.component';
import { DialogwatchremoveComponent } from './dialodboxmessages/dialogwatchremove/dialogwatchremove.component';
import { DialogwatchloginComponent } from './dialodboxmessages/dialogwatchlogin/dialogwatchlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FavoriteComponent,
    PopularComponent,
    TrendingComponent,
    ProfileComponent,
    MoviedetailsComponent,
    DialogboxComponent,
    Dialogbox1Component,
    Dialogbox2Component,
    Dialogbox3Component,
    VideoComponent,
    UpdateprofileComponent,
    Dialogbox4Component,
    Dialogbox5Component,
    Dialogbox6Component,
    Dialogbox7Component,
    DialogboxupdateComponent,
    DialogboxremoveComponent,
    RecommendationComponent,
    AdminComponent,
    DeletemovieComponent,
    UpdatemovieComponent,
    DialogmovieexistComponent,
    DialogmovieupdateComponent,
    DialogadminaddComponent,
    DialogadmindeleteComponent,
    AdminhomeComponent,
    DialogwelcomeadminComponent,
    ForgotpasswordComponent,
    WatchlaterComponent,
    DialogwatchaddComponent,
    DialogwatchexistComponent,
    DialogwatchremoveComponent,
    DialogwatchloginComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
