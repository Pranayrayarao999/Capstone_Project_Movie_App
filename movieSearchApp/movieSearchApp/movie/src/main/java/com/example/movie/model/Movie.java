package com.example.movie.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document
public class Movie {
    @Id
    private String movieId;
    private String movieTitle, directorName, actorName, actressName;
    private String genre, duration, releaseYear, language, certification, category;
    private String imageUrl, movieUrl;
}
