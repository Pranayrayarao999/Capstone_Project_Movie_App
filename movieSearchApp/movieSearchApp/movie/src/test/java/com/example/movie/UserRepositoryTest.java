//package com.example.movie;
//import com.example.movie.model.Movie;
//import com.example.movie.model.User;
//import com.example.movie.repository.MovieRepository;
//import com.example.movie.repository.UserRepository;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//@ExtendWith(SpringExtension.class)
//@DataMongoTest
//public class UserRepositoryTest {
//    @Autowired
//    private UserRepository userRepository;
//    private MovieRepository movieRepository;
//    private User user;
//    private Movie movie;
//
//    @BeforeEach
//    private void setup(){
//        user = new User("abc@gmail.com","A67","A67","Hyderabad","img1");
//        movie = new Movie("23","Raja","suresh","venky","vennela","Romantic","2:12:23","2008","Telugu","UA","Popular","image67","movie1");
//    }
//
//    @AfterEach()
//    public void biscuit() {
//        user = null;
////        userRepository.deleteAll();
//    }
//
//    @Test //saveuser
//    public void SaveUser(){
//        userRepository.save(user);
//        User result = userRepository.findById(user.getEmailId()).get();
//        assertEquals(result.getUserName(),user.getUserName());
//    }
//
////    @Test //getallfavourites
////    public void getAllFavourite(){
////        userRepository.save(user);
////        List<User> movieList= userRepository.findAll();
////        assertEquals(1,movieList.size());
////    }
//}
