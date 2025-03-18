package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;
import com.example.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:1234") // Allow React frontEnd
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) 
    {
        String responseMessage = userService.registerUser(user);
        Map<String, String> response = new HashMap<>();
        response.put("message", responseMessage);
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) 
    {
        User user = userService.authenticateUser(loginData.get("email"), loginData.get("password"));

        if (user != null) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successful!");
            //  response.put("name", user.getName());
            response.put("firstName", user.getFirstName());
            response.put("token", "dummy-jwt-token"); // Placeholder for actual JWT token
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid email or password"));
        }
    }
}
