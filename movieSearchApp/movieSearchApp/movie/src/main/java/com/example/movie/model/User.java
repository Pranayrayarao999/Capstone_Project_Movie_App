package com.example.movie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document
public class User {
    @Id
    private String emailId;
    private String userName, password, city, profileUrl;
    private List<Movie> favorite;
    private List<Movie> watchLater;

    public User(String emailId, String userName, String password, String city, String profileUrl) {
        this.emailId = emailId;
        this.userName = userName;
        this.password = password;
        this.city = city;
        this.profileUrl=profileUrl;
        this.favorite= new ArrayList<>();
        this.watchLater=new ArrayList<>();
    }
}
