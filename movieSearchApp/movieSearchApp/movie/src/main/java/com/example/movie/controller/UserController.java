package com.example.movie.controller;

import com.example.movie.exception.MovieAlreadyExistsException;
import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.exception.UserAlreadyExistsException;
import com.example.movie.exception.UserNotFoundException;
import com.example.movie.model.Movie;
import com.example.movie.model.User;
import com.example.movie.rabbitmq.Input;
import com.example.movie.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movieUser")
@CrossOrigin(origins="*")
public class UserController {

    @Autowired
    private UserService userService;

    // http://localhost:65100/movieUser/userDetails/recommendation/{emailId}  (get)
    @GetMapping("/userDetails/recommendation/{emailId}")
    public ResponseEntity<?> getRecommendationMovie(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getRecommendation(emailId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/userDetails/{emailId}  (get)
    @GetMapping("/userDetails/{emailId}")
    public ResponseEntity<?> getUserDetails(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getUserDetails(emailId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/register  (post)
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Input input) throws UserAlreadyExistsException {
        return new ResponseEntity<>(userService.addUser1(input), HttpStatus.CREATED);
    }

    //for favorite

    // http://localhost:65100/movieUser/favorite/addfavorite/{emailId}/{movieId} (post)
    @PostMapping("/favorite/addfavorite/{emailId}/{movieId}")
    public ResponseEntity<?> addMovieToFavorite(@PathVariable String emailId, @PathVariable String movieId) throws UserNotFoundException, MovieAlreadyExistsException {
        return new ResponseEntity<>(userService.addMoviesToFavorite(emailId, movieId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/favorite/remove/{emailId}/{movieId}  (delete)
    @DeleteMapping("/favorite/remove/{emailId}/{movieId}")
    public ResponseEntity<?> removeFromFavorite(@PathVariable String emailId, @PathVariable String movieId) throws UserNotFoundException, MovieNotFoundException {
        return new ResponseEntity<>(userService.removeMovieFromFavorite(emailId, movieId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/favorite/favorites/{emailId}  (get)
    @GetMapping("/favorite/favorites/{emailId}")
    public ResponseEntity<?> getMovieFromFavorite(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getFromFavorite(emailId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/totalFavorite/{emailId}  (get)
    @GetMapping("/totalFavorite/{emailId}")
    public ResponseEntity<?> getNoOfFavMovieDetails(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getTotalNoOfFavorite(emailId), HttpStatus.OK);
    }



    //for watch later

    // http://localhost:65100/movieUser/watchlater/add/{emailId}/{movieId} (post)
    @PostMapping("/watchlater/add/{emailId}/{movieId}")
    public ResponseEntity<?> addMovieToWatchLater(@PathVariable String emailId, @PathVariable String movieId) throws UserNotFoundException, MovieAlreadyExistsException {
        return new ResponseEntity<>(userService.addMoviesToWatchLater(emailId, movieId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/watchlater/remove/{emailId}/{movieId}  (delete)
    @DeleteMapping("/watchlater/remove/{emailId}/{movieId}")
    public ResponseEntity<?> removeFromWatchLater(@PathVariable String emailId, @PathVariable String movieId) throws UserNotFoundException, MovieNotFoundException {
        return new ResponseEntity<>(userService.removeMovieFromWatchLater(emailId, movieId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/watchlater/getwatchlater/{emailId}  (get)
    @GetMapping("/watchlater/getwatchlater/{emailId}")
    public ResponseEntity<?> getMovieFromWatchLater(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getFromWatchLater(emailId), HttpStatus.OK);
    }
    // http://localhost:65100/movieUser/totalWatchLater/{emailId}  (get)
    @GetMapping("/totalWatchLater/{emailId}")
    public ResponseEntity<?> getNoOfWatchLaterMovieDetails(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getTotalNoOfWatchLater(emailId), HttpStatus.OK);
    }



    // http://localhost:65100/movieUser/update/{emailId}/{userName}/{password}/{city}  (post)
    @PostMapping("/update/{emailId}/{userName}/{password}/{city}/{profileUrl}")
    public ResponseEntity<?> register(@PathVariable String emailId, @PathVariable String userName,
                                      @PathVariable String password, @PathVariable String city,
                                      @PathVariable String profileUrl) throws UserAlreadyExistsException {

        if(profileUrl=="1")
        {
            profileUrl="./../assets/profile/profile1.jpg";
        }
        else if(profileUrl=="2")
        {
            profileUrl="./../assets/profile/profile7.jpg";
        }
        else if(profileUrl=="3")
        {
            profileUrl="./../assets/profile/profile8.jpg";
        }
        else if(profileUrl=="4")
        {
            profileUrl="./../assets/profile/profile9.jpg";
        }
        return new ResponseEntity<>(userService.updateUser1(emailId,userName, password, city, profileUrl), HttpStatus.OK);
    }

}
