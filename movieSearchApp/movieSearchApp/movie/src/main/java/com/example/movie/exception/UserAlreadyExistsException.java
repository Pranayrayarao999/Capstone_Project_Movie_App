package com.example.movie.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(code= HttpStatus.NOT_FOUND, reason="User Already Exists")
public class UserAlreadyExistsException extends Exception {
}
