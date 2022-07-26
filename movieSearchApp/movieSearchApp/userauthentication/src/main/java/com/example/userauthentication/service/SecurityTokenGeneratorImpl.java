package com.example.userauthentication.service;

import com.example.userauthentication.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator {
    @Override
    public Map<String, String> generateToken(User user) {
        String jwtToken = Jwts.builder()
                .setSubject(user.getEmailId())
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512,"mykey").compact();
        Map<String,String> map = new HashMap<String,String>();
        map.put("token",jwtToken);
        map.put("email",user.getEmailId());
        map.put("name", user.getUserName());
        map.put("role",user.getRole());
        map.put("message","User successfully logged in");
        return map;
    }
}
