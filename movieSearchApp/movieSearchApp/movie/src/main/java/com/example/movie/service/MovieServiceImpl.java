package com.example.movie.service;

import com.example.movie.exception.MovieAlreadyExistsException;
import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.model.Movie;
import com.example.movie.repository.MovieRepository;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Movie addMovie(Movie movie) throws MovieAlreadyExistsException {
        return movieRepository.save(movie);
    }

    @Override
    public boolean deleteMovie(String movieId) throws MovieNotFoundException {
        if(movieRepository.findById(movieId).isPresent()){
            movieRepository.deleteById(movieId);
            return true;
        }
        else{
            throw new MovieNotFoundException();
        }
    }

    @Override
    public Movie updateMovie(Movie movie) throws MovieNotFoundException{
        if(movieRepository.findById(movie.getMovieId()).isPresent()){
            return movieRepository.save(movie);
        }
        else{
            throw new MovieNotFoundException();
        }
    }

    @Override
    public List<Movie> findAllMovie() {
        List<Movie> list=movieRepository.findAll();
        list.sort((o1, o2) -> o1.getMovieTitle().compareTo(o2.getMovieTitle()));
        return list;
    }



    @Override
    public int findTotalMovies() {
//        System.out.println("total movies in db :"+ movieRepository.findAll().size());
        return movieRepository.findAll().size();
    }

    @Override
    public List<Movie> getByMovieId(String movieId) throws MovieNotFoundException {
        if(movieRepository.findByMovieId(movieId).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByMovieId(movieId);
        }
    }


    @Override
    public List<Movie> getMovieByTitle(String movieTitle) throws MovieNotFoundException {
        if(movieRepository.findByMovieTitle(movieTitle).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByMovieTitle(movieTitle);
        }
    }

    @Override
    public List<Movie> getByDirectorName(String directorName) throws MovieNotFoundException {
        if(movieRepository.findByDirectorName(directorName).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByDirectorName(directorName);
        }
    }

    @Override
    public List<Movie> getByActorName(String actorName) throws MovieNotFoundException {
        if(movieRepository.findByActorName(actorName).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByActorName(actorName);
        }
    }

    @Override
    public List<Movie> getByActressName(String actressName) throws MovieNotFoundException {
        if(movieRepository.findByActressName(actressName).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByActressName(actressName);
        }
    }

    @Override
    public List<Movie> getByGenre(String genre) throws MovieNotFoundException {
        if(movieRepository. findByGenre(genre).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByGenre(genre);
        }
    }

    @Override
    public List<Movie> getByReleaseYear(String releaseYear) throws MovieNotFoundException {
        if(movieRepository.findByReleaseYear(releaseYear).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByReleaseYear(releaseYear);
        }
    }

    @Override
    public List<Movie> getByLanguage(String language) throws MovieNotFoundException {
        if(movieRepository.findByLanguage(language).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByLanguage(language);
        }
    }

    @Override
    public List<Movie> getByCertification(String certification) throws MovieNotFoundException {
        if(movieRepository.findByCertification(certification).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByCertification(certification);
        }
    }

    @Override
    public List<Movie> getMovieByFirstLetter(String movieTitle) throws MovieNotFoundException {
        return movieRepository.findAll().stream().filter(s-> s.getMovieTitle()!=null)
                .filter(c->c.getMovieTitle().toLowerCase().startsWith(movieTitle.toLowerCase()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Movie> getMovieByCategory(String category) throws MovieNotFoundException {
        if(movieRepository.findByCategory(category).isEmpty()){
            throw new MovieNotFoundException();
        }
        else{
            return movieRepository.findByCategory(category);
        }
    }

    @Override
    public List<Movie> getMovieByDirector(String directorName) {
        return movieRepository.findAll().stream().filter(s-> s.getDirectorName()!=null)
                .filter(c->c.getDirectorName().toLowerCase().startsWith(directorName.toLowerCase()))
                .collect(Collectors.toList());
    }
//    @Override
//    public List<Movie> getMovieByActor(String actorName) {
//        return movieRepository.findAll().stream().filter(s-> s.getActorName()!=null)
//                .filter(c->c.getActorName().startsWith(actorName))
//                .collect(Collectors.toList());
//    }
    @Override
    public List<Movie> getMovieByActor(String actorName) {
        return movieRepository.findAll().stream().filter(s-> s.getActorName()!=null)
                .filter(c->c.getActorName().toLowerCase().startsWith(actorName.toLowerCase()))
                .collect(Collectors.toList());
    }
}
