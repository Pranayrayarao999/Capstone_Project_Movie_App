//package com.example.movie;
//
//import com.example.movie.model.Movie;
//import com.example.movie.repository.MovieRepository;
//import org.junit.After;
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
//public class MovieRepositoryTest {
//    @Autowired
//    private MovieRepository movieRepository;
//    private Movie movie;
//
//    @BeforeEach
//    public void setup(){
//        movie = new Movie("21","Beast","Nelson","Thalapathyvijay","Poojahedge","Action","2:13:34","2022","Tamil","UA","Trending","image2", "movie1");
//
//    }
//
//    @AfterEach
//    public void movie(){
//        movie=null;
//        movieRepository.deleteAll();
//    }
//
////    @Test //retreiving
////    public void getAllMovie(){
////        movieRepository.insert(movie);
////        List<Movie> movieList=movieRepository.findAll();
////        assertEquals(1,movieList.size());
////    }
//
//    @Test
//    public void saveReturnsMovie(){
//        movieRepository.insert(movie);
//        Movie movie1=movieRepository.findById(movie.getMovieId()).get();
//        assertEquals(movie1.getMovieTitle(),movie.getMovieTitle());
//    }
//}
