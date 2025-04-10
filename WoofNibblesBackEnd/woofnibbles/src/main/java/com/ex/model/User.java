package com.ex.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    // @Column(nullable = false)
    // private String name;
    @Column(name = "first_name", nullable = false) // New field
    private String firstName;

    @Column(name = "last_name", nullable = false) // New field
    private String lastName;

    
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    //  public String getName() {
    //      return name;
    //  }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }

    
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    // public void setName(String name) {
    //     this.name = name;
    // }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
