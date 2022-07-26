package com.example.movie.repository;

import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MovieRepository extends MongoRepository<Movie, String> {

    public abstract List<Movie> findByMovieId(String movieId);
    public abstract List<Movie> findByMovieTitle(String movieTitle);
    public abstract List<Movie> findByDirectorName(String directorName);
    public abstract List<Movie> findByActorName(String actorName);
    public abstract List<Movie> findByActressName(String actorName);
    public abstract List<Movie> findByGenre(String genre);
    public abstract List<Movie> findByReleaseYear(String releaseYear);
    public abstract List<Movie> findByLanguage(String language);
    public abstract List<Movie> findByCertification(String certification);
    public abstract List<Movie> findByCategory(String category);

}
