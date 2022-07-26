package com.example.gateway.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfiguration {

    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder builder)
    {
        return builder.routes()
                .route(p->p
                        .path("/user/**").uri("http://localhost:65200/"))
                .route(p->p
                        .path("/movieUser/**").uri("http://localhost:65100/"))
                .route(p->p
                        .path("/movieApp/**").uri("http://localhost:65100/"))
                .build();
    }
}
