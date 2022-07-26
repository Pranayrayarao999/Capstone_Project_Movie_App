package com.example.movie.service;

import com.example.movie.exception.MovieAlreadyExistsException;
import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.exception.UserAlreadyExistsException;
import com.example.movie.exception.UserNotFoundException;
import com.example.movie.model.Movie;
import com.example.movie.model.User;
import com.example.movie.rabbitmq.Input;

import java.util.List;

public interface UserService {

    //add user
    public abstract User addUser(User user) throws UserAlreadyExistsException;
    public abstract User addUser1(Input input) throws UserAlreadyExistsException;

    // for favorite service
    public abstract User addMoviesToFavorite(String emailId, String movieId) throws MovieAlreadyExistsException, UserNotFoundException;
    public abstract User removeMovieFromFavorite(String emailId, String movieId) throws MovieNotFoundException;
    public abstract List<Movie> getFromFavorite(String emailId) throws UserNotFoundException;
    public int getTotalNoOfFavorite(String emailId) throws UserNotFoundException;

    // update user
    public User getUserDetails(String emailId) throws UserNotFoundException;
    public User updateUser(String emailId, String userName, String password, String city, String profileUrl) throws UserAlreadyExistsException;
    public User updateUser1(String emailId, String userName, String password, String city, String profileUrl) throws UserAlreadyExistsException;

    // for recommendation
    public List<Movie> getRecommendation(String emailId) throws UserNotFoundException;

    //  for watch later
    public User addMoviesToWatchLater(String emailId, String movieId) throws MovieAlreadyExistsException, UserNotFoundException;
    public abstract User removeMovieFromWatchLater(String emailId, String movieId) throws MovieNotFoundException;
    public abstract List<Movie> getFromWatchLater(String emailId) throws UserNotFoundException;
    public int getTotalNoOfWatchLater(String emailId) throws UserNotFoundException;
}
