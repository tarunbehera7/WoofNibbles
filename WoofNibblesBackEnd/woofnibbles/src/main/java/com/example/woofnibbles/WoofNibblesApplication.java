package com.example.woofnibbles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.ex")
@EntityScan("com.ex.model") // Ensure JPA can find the User entity
@EnableJpaRepositories("com.ex.repository") // Ensure repositories are scanned
public class WoofNibblesApplication 
{	
    public static void main(String[] args) 
    {	
        SpringApplication.run(WoofNibblesApplication.class, args);
    }
}