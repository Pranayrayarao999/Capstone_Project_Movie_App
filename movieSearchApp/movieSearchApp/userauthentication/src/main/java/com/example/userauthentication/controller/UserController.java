package com.example.userauthentication.controller;

import com.example.userauthentication.exception.UserAlreadyExistsException;
import com.example.userauthentication.exception.UserNotFoundException;
import com.example.userauthentication.model.User;
import com.example.userauthentication.service.SecurityTokenGenerator;
import com.example.userauthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
//@CrossOrigin(origins="*")
public class UserController {
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator){
        this.userService=userService;
        this.securityTokenGenerator=securityTokenGenerator;
    }
    // http://localhost:65200/user/recoverPassword/{emailId}  (get)

    @GetMapping("/recoverPassword/{emailId}")
    public ResponseEntity<?> passwordRecovery(@PathVariable String emailId) throws UserNotFoundException {
        return new ResponseEntity<>(userService.getUserPassword(emailId), HttpStatus.OK);
    }

    // http://localhost:65200/user/register  (post)

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody User user) throws UserAlreadyExistsException {
        try{
            return new ResponseEntity<>(userService.addUser(user), HttpStatus.OK);
        }
        catch(Exception ex){
            throw new UserAlreadyExistsException();
        }
    }

    // http://localhost:65200/user/login  (post)

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user)throws UserNotFoundException {
        User result= userService.authenticate(user.getEmailId(), user.getPassword());
        if(result!=null){
            return new ResponseEntity<>(securityTokenGenerator.generateToken(result),HttpStatus.OK);
            // return new ResponseEntity<>(result, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new String("Login failed...Incorrect User name or password... "), HttpStatus.NOT_FOUND);
        }
    }
    // http://localhost:65200/user/allusers  (get)

    @GetMapping("/allusers")
    public  ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
    }

}
