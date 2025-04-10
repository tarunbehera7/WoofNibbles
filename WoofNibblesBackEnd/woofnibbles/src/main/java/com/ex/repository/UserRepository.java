package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> 
{
    Optional<User> findByEmail(String email);
}