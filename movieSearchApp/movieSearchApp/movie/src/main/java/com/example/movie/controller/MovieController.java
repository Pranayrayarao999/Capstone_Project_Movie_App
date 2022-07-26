package com.example.movie.controller;


import com.example.movie.exception.MovieAlreadyExistsException;
import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.exception.UserNotFoundException;
import com.example.movie.model.Movie;
import com.example.movie.service.MovieService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/movieApp")
//@CrossOrigin(origins="*")
public class MovieController {

    @Autowired
    private MovieService movieService;

    //for admin add movie, delete movie, update movie
    // http://localhost:65100/movieApp/addMovie  (post)
    @PostMapping("/addMovie")
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) throws MovieAlreadyExistsException {
        return new ResponseEntity<>(movieService.addMovie(movie), HttpStatus.CREATED);
    }

    // http://localhost:65100/movieApp/delete/{movieId}  (delete)
    @DeleteMapping("/delete/{movieId}")
    public ResponseEntity<?> deleteMovie(@PathVariable String movieId) throws UserNotFoundException, MovieNotFoundException {
        return new ResponseEntity<>(movieService.deleteMovie(movieId), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/update (put)
    @PutMapping("/update")
    public ResponseEntity<?> updateMovie(@RequestBody Movie movie) throws UserNotFoundException, MovieNotFoundException {
        return new ResponseEntity<>(movieService.updateMovie(movie), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/getAllMovie  (get)
    @GetMapping("/getAllMovie")
    public ResponseEntity<List<Movie>> getAllMovie() {
        return new ResponseEntity<>(movieService.findAllMovie(), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/getMovieTotal  (get)
    @GetMapping("/getMovieTotal")
    public ResponseEntity<?> getTotalNoOfMovies() {
        return new ResponseEntity<>(movieService.findTotalMovies(), HttpStatus.OK);
    }


    // http://localhost:65100/movieApp/movieId/{movieId}  (get)
    @GetMapping("/movieId/{movieId}")
    public ResponseEntity<List<Movie>> getMovieById(@PathVariable String movieId) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByMovieId(movieId), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/title/{movieTitle}  (get)
    @GetMapping("/title/{movieTitle}")
    public ResponseEntity<List<Movie>> getMovieByTitle(@PathVariable String movieTitle) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getMovieByTitle(movieTitle), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/directorName/{directorName}  (get)
    @GetMapping("/directorName/{directorName}")
    public ResponseEntity<List<Movie>> getMovieByDirectorName(@PathVariable String directorName) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByDirectorName(directorName), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/actorName/{actorName}  (get)
    @GetMapping("/actorName/{actorName}")
    public ResponseEntity<List<Movie>> getMovieByActorName(@PathVariable String actorName) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByActorName (actorName), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/actressName/{actressName}  (get)
    @GetMapping("/actressName/{actressName}")
    public ResponseEntity<List<Movie>> getMovieByActressName(@PathVariable String actressName) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByActressName(actressName), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/genre/{genre}  (get)
    @GetMapping("/genre/{genre}")
    public ResponseEntity<List<Movie>> getMovieByGenre(@PathVariable String genre) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByGenre(genre), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/releaseYear/{releaseYear}  (get)
    @GetMapping("/releaseYear/{releaseYear}")
    public ResponseEntity<List<Movie>> getMovieByReleaseYear(@PathVariable String releaseYear) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByReleaseYear(releaseYear), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/language/{language}  (get)
    @GetMapping("/language/{language}")
    public ResponseEntity<List<Movie>> getMovieByLanguage(@PathVariable String language) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByLanguage(language), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/certification/{certification}  (get)
    @GetMapping("/certification/{certification}")
    public ResponseEntity<List<Movie>> getMovieByCertification(@PathVariable String certification) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getByCertification(certification), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/movieByFirstLetter/{movieTitle}  (get)
    @GetMapping("/movieByFirstLetter/{movieTitle}")
    public ResponseEntity<List<Movie>> getMovieTitleByFirstLetter(@PathVariable String movieTitle) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getMovieByFirstLetter(movieTitle), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/movieByCategory/{category}  (get)
    @GetMapping("/movieByCategory/{category}")
    public ResponseEntity<List<Movie>> getMovieByCategory(@PathVariable String category) throws MovieNotFoundException {
        return new ResponseEntity<>(movieService.getMovieByCategory(category), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/movieByDirector/{directorName}  (get)
    @GetMapping("/movieByDirector/{directorName}")
    public ResponseEntity<List<Movie>> getMovieByDirector(@PathVariable String directorName) {
        return new ResponseEntity<>(movieService.getMovieByDirector(directorName), HttpStatus.OK);
    }

    // http://localhost:65100/movieApp/movieByActor/{actorName}  (get)
    @GetMapping("/movieByActor/{actorName}")
    public ResponseEntity<List<Movie>> getMovieByActor(@PathVariable String actorName) {
        return new ResponseEntity<>(movieService.getMovieByActor(actorName), HttpStatus.OK);
    }
}
