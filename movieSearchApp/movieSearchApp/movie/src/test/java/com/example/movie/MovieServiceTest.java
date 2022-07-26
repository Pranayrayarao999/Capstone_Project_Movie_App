//package com.example.movie;
//
//import com.example.movie.exception.MovieAlreadyExistsException;
//import com.example.movie.exception.MovieNotFoundException;
//import com.example.movie.model.Movie;
//import com.example.movie.repository.MovieRepository;
//import com.example.movie.service.MovieServiceImpl;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.mockito.Mockito.*;
//
//@ExtendWith(MockitoExtension.class)
//public class MovieServiceTest {
//    @Mock
//    private MovieRepository movieRepository;
//
//    @InjectMocks
//    private MovieServiceImpl movieService;
//
//    private Movie movie;
////    List<Movie> movieList = new ArrayList<>();
//
//    @BeforeEach
//    public void detail(){
//        movie = new Movie("34","Djtillu","Radha","Siddhu","Neha","Romance","2:12:05","2022","Telugu","UA","Trending","image3","movie1");
//    }
//
//    @AfterEach
//    public void cinema(){
//        movie = null;
//        movieRepository.deleteAll();
//    }
//
//    @Test  //savemovie
//    public void saveMovieDetails() throws MovieAlreadyExistsException {
//        when(movieRepository.save(movie)).thenReturn(movie);
//        assertEquals(movie,movieService.addMovie(movie));
//        verify(movieRepository,times(1)).save(movie);
//    }
//
//}
