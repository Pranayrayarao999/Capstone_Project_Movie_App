package com.example.movie.service;

import com.example.movie.exception.MovieAlreadyExistsException;
import com.example.movie.exception.MovieNotFoundException;
import com.example.movie.exception.UserAlreadyExistsException;
import com.example.movie.exception.UserNotFoundException;
import com.example.movie.model.Movie;
import com.example.movie.model.User;
import com.example.movie.rabbitmq.Input;
import com.example.movie.rabbitmq.Producer;
import com.example.movie.rabbitmq.UserDTO;
import com.example.movie.repository.MovieRepository;
import com.example.movie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private Producer producer;

    @Override
    public User addUser1(Input input) throws UserAlreadyExistsException {
// register user
        User user =new User(input.getEmailId(),input.getUserName(), input.getPassword(), input.getCity(), input.getProfileUrl());
        User result=addUser(user);
        UserDTO userDTO=new UserDTO(input.getEmailId(),input.getUserName(), input.getPassword(), false);
        producer.sendMessageToMq(userDTO);
        return result;
    }

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findById(user.getEmailId()).isEmpty()){
            return userRepository.insert(user);
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }
    @Override
    public User updateUser(String emailId, String userName, String password, String city, String profileUrl) throws UserAlreadyExistsException {
        if(userRepository.findById(emailId).isPresent()){
            User user=userRepository.findById(emailId).get();
            user.setUserName(userName);
            user.setPassword(password);
            user.setCity(city);
            user.setProfileUrl(profileUrl);
            return userRepository.save(user);
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }

    // update user details
    @Override
    public User updateUser1(String emailId, String userName, String password, String city, String profileUrl) throws UserAlreadyExistsException {
        User result=updateUser(emailId, userName, password, city, profileUrl);
        UserDTO userDTO=new UserDTO(emailId, userName, password, true);
        producer.sendMessageToMq(userDTO);
        return result;
    }

    // for favorite movie
    @Override
    public User addMoviesToFavorite(String emailId, String movieId) throws MovieAlreadyExistsException, UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            User result=userRepository.findById(emailId).get();
            List<Movie>  mlist=result.getFavorite();
            for (Movie m : mlist){
                if(m.getMovieId().toString().equals(movieId)){
                    throw new MovieAlreadyExistsException();
                }
            }
            Movie movie=movieRepository.findById(movieId).get();
            result.getFavorite().add(movie);
            return userRepository.save(result);
        }
        else{
            throw new UserNotFoundException();
        }
    }

    @Override
    public User removeMovieFromFavorite(String emailId, String movieId) throws MovieNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            User result=userRepository.findById(emailId).get();
            result.getFavorite().removeIf(m-> m.getMovieId().equals(movieId));
            return userRepository.save(result);
        }
        else {
            throw new MovieNotFoundException();
        }
    }

    @Override
    public List<Movie> getFromFavorite(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            return userRepository.findById(emailId).get().getFavorite();
        }
        else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public int getTotalNoOfFavorite(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            return userRepository.findById(emailId).get().getFavorite().size();
        }
        else {
            throw new UserNotFoundException();
        }
    }

    // for watch later movie
    @Override
    public User addMoviesToWatchLater(String emailId, String movieId) throws MovieAlreadyExistsException, UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            User result=userRepository.findById(emailId).get();
            List<Movie>  mlist=result.getWatchLater();
            for (Movie m : mlist){
                if(m.getMovieId().toString().equals(movieId)){
                    throw new MovieAlreadyExistsException();
                }
            }
            Movie movie=movieRepository.findById(movieId).get();
            result.getWatchLater().add(movie);
            return userRepository.save(result);
        }
        else{
            throw new UserNotFoundException();
        }
    }

    @Override
    public User removeMovieFromWatchLater(String emailId, String movieId) throws MovieNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            User result=userRepository.findById(emailId).get();
            result.getWatchLater().removeIf(m-> m.getMovieId().equals(movieId));
            return userRepository.save(result);
        }
        else {
            throw new MovieNotFoundException();
        }
    }

    @Override
    public List<Movie> getFromWatchLater(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            return userRepository.findById(emailId).get().getWatchLater();
        }
        else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public int getTotalNoOfWatchLater(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            return userRepository.findById(emailId).get().getWatchLater().size();
        }
        else {
            throw new UserNotFoundException();
        }
    }

    //for user recommendation
    @Override
    public List<Movie> getRecommendation(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            List<Movie> movie= userRepository.findById(emailId).get().getFavorite();
            List<String> genre=new ArrayList<>();
            List<Movie> favorite=new ArrayList<>();
            for(Movie g: movie){
                genre.add(g.getGenre());
            }
//            genre.stream().distinct();
            for(String s:genre.stream().distinct().toList()){
                List<Movie> temp=movieRepository.findByGenre(s);
                favorite.addAll(temp);
            }
            return favorite;
        }
        else {
            throw new UserNotFoundException();
        }
    }

    @Override
    public User getUserDetails(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()){
            return userRepository.findById(emailId).get();
        }
        else {
            throw new UserNotFoundException();
        }
    }
}
