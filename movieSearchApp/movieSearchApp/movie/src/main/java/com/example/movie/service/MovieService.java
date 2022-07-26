package com.example.movie.service;

import com.example.movie.exception.MovieAlreadyExistsException;
import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.model.Movie;
import org.json.simple.parser.ParseException;

import java.io.IOException;
import java.util.List;

public interface MovieService {

    public int findTotalMovies();
    public abstract Movie addMovie(Movie movie)throws MovieAlreadyExistsException;
    public boolean deleteMovie(String movieId)throws MovieNotFoundException;
    public Movie updateMovie(Movie movie) throws MovieNotFoundException;
    public abstract List<Movie> findAllMovie();
    public abstract List<Movie> getByMovieId(String movieId) throws MovieNotFoundException;
    public abstract List<Movie> getMovieByTitle(String movieTitle) throws MovieNotFoundException;
    public abstract List<Movie> getByDirectorName(String directorName) throws MovieNotFoundException;
    public abstract List<Movie> getByActorName(String actorName) throws MovieNotFoundException;
    public abstract List<Movie> getByActressName(String actressName) throws MovieNotFoundException;
    public abstract List<Movie> getByGenre(String genre) throws MovieNotFoundException;

    public abstract List<Movie> getByReleaseYear(String releaseYear) throws MovieNotFoundException;
    public abstract List<Movie> getByLanguage(String language) throws MovieNotFoundException;
    public abstract List<Movie> getByCertification(String certification) throws MovieNotFoundException;
    public List<Movie> getMovieByFirstLetter(String movieTitle) throws MovieNotFoundException;
    public List<Movie> getMovieByCategory(String category) throws MovieNotFoundException;
    public List<Movie> getMovieByDirector(String directorName);
    public List<Movie> getMovieByActor(String actorName);
}
