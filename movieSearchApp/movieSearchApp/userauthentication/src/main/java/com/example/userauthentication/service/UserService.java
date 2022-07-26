package com.example.userauthentication.service;

import com.example.userauthentication.exception.UserAlreadyExistsException;
import com.example.userauthentication.exception.UserNotFoundException;
import com.example.userauthentication.model.User;

import java.util.List;

public interface UserService {
    public abstract User addUser(User user) throws UserAlreadyExistsException;
    public abstract User authenticate(String emailId, String password) throws UserNotFoundException;
    public List<User> getAllUser();

    public User updateUser(User user) throws UserAlreadyExistsException;
    public String getUserPassword(String emailId) throws UserNotFoundException;

}
