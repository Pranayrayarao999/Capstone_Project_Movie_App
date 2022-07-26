package com.example.userauthentication.service;

import com.example.userauthentication.exception.UserAlreadyExistsException;
import com.example.userauthentication.exception.UserNotFoundException;
import com.example.userauthentication.model.User;
import com.example.userauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {
        user.setRole("ROLE_USER"); //"ROLE_ADMIN" one time
        if(userRepository.findById(user.getEmailId()).isEmpty()){
            return userRepository.save(user);
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }
    @Override
    public User updateUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findById(user.getEmailId()).isPresent()){
            user.setRole("ROLE_USER");
            return userRepository.save(user);
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }

    @Override
    public User authenticate(String emailId, String password) throws UserNotFoundException {
        User result = null;

        if (userRepository.findById(emailId).isPresent()) {
            User temp = userRepository.findById(emailId).get();
            if (temp != null) {
                if (temp.getPassword().equals(password)) {
                    result = temp;
                }
            }
        }
        else{
            throw new UserNotFoundException();
        }
        return result;
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public String getUserPassword(String emailId) throws UserNotFoundException{
        if(userRepository.findById(emailId).isPresent()) {
            User user = userRepository.findById(emailId).get();
            String password = user.getPassword();
            return password;
        }
        else
        {
            throw new UserNotFoundException();
        }
    }
}
