//package com.example.movie;
//
//
//import com.example.movie.exception.UserAlreadyExistsException;
//import com.example.movie.model.Movie;
//import com.example.movie.model.User;
//import com.example.movie.repository.UserRepository;
//import com.example.movie.service.UserServiceImpl;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//@ExtendWith(MockitoExtension.class)
//public class UserServiceTest {
//    @Mock
//    private UserRepository userRepository;
//
//    @InjectMocks
//    private UserServiceImpl userService;
//
//    private User user;
//    List<Movie> favourite = new ArrayList<>();
//
//    @BeforeEach
//    public void cream(){
//        user =new User("bcd@gmail.com","bcd12","bcd12","Hyderabad","image6",favourite);
//    }
//
//    @AfterEach
//    public void full(){
//        user = null;
//    }
//
//    @Test //adduser
//    public void UsertoSave() throws UserAlreadyExistsException {
//        when(userRepository.findById(user.getEmailId())).thenReturn(Optional.ofNullable(null));
//        when(userRepository.insert(user)).thenReturn(user);
//        assertEquals(user,userService.addUser(user));
//    }
//
//}
