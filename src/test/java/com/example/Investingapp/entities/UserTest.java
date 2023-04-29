package com.example.Investingapp.entities;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {
    @Test
    void testUserName(){
        User addUser = new User("Aegal","Ayub","Egal","1234");
        assertEquals("Aegal",addUser.getUserName());
    }
    @Test
    void testFirstName(){
        User addUser = new User("Aegal","Ayub","Egal","1234");
        assertEquals("Ayub",addUser.getFirstName());
    }
    @Test
    void testLastName(){
        User addUser = new User("Aegal","Ayub","Egal","1234");
        assertEquals("Egal",addUser.getLastName());
    }
    @Test
    void testPassword(){
        User addUser = new User("Aegal","Ayub","Egal","1234");
        assertEquals("1234",addUser.getPassword());
    }
}