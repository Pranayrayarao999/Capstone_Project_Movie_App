package com.example.userauthentication.rabbitmq;

import com.example.userauthentication.exception.UserAlreadyExistsException;
import com.example.userauthentication.model.User;
import com.example.userauthentication.service.UserService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private UserService userService;

    @RabbitListener(queues="user_queue")
    public void getDtoAndAddToDb(UserDTO userdto) throws UserAlreadyExistsException {
        User user =new User();
        user.setEmailId(userdto.getEmailId());
        user.setUserName(userdto.getUserName());
        user.setPassword(userdto.getPassword());
        if(userdto.isUpdateFlg()){
            userService.updateUser(user);
        }
        else {
            userService.addUser(user);
        }
    }

}
