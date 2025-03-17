package com.example.controller;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
            response.put("token", "dummy-jwt-token"); // Placeholder for actual JWT token
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid email or password"));
        }
    }
}
