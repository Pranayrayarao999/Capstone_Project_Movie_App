package com.example.movie.rabbitmq;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
public class Producer {
    private RabbitTemplate rabbitTemplate;
    private DirectExchange directExchange;

    @Autowired
    public Producer(RabbitTemplate rabbitTemplate, DirectExchange directExchange){
        this.rabbitTemplate=rabbitTemplate;
        this.directExchange=directExchange;
    }

    public void sendMessageToMq(UserDTO userdto){
        rabbitTemplate.convertAndSend(directExchange.getName(), "user_routing", userdto);
    }
}
