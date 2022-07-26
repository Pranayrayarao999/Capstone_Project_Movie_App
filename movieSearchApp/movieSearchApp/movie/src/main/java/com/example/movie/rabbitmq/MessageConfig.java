package com.example.movie.rabbitmq;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfig {
    private String exchangeName="user_exchange";
    private String registerQueue="user_queue";

    @Bean
    public DirectExchange getDirectExchange(){
        return new DirectExchange(exchangeName);
    }

    @Bean
    public Queue getQueue(){
        return new Queue(registerQueue);
    }

    @Bean
    public Jackson2JsonMessageConverter getProducerJacksonConverterdata(){
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory){
        RabbitTemplate rabbitTemplate=new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(getProducerJacksonConverterdata());
        return rabbitTemplate;
    }

    @Bean
    public Binding bindingUser(Queue queue, DirectExchange directExchange){
        return BindingBuilder.bind(queue).to(directExchange).with("user_routing");
    }



}
