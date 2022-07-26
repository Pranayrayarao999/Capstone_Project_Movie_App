package com.example.movie.repository;

import com.example.movie.model.Movie;
import com.example.movie.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
