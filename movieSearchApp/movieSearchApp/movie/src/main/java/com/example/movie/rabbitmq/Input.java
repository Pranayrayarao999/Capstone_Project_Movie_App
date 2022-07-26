package com.example.movie.rabbitmq;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Input {
    private String emailId, userName, password, city, profileUrl;

}
