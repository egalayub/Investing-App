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
    @Test
    void addFavoriteCrypto(){
        User addUser = new User("Aegal","Ayub","Egal","1234");
        Crypto crypto = new Crypto();
        Crypto crypto2 = new Crypto();
        addUser.addFavoriteCoins(crypto);
        addUser.addFavoriteCoins(crypto2);
        assertTrue(addUser.getFavoriteCoins().contains(crypto));
        assertTrue(addUser.getFavoriteCoins().contains(crypto2));
        assertEquals(2,addUser.getFavoriteCoins().size());
    }
    @Test
    void RemoveFavoriteCrypto(){
        User addUser = new User("Aegal","Ayub","Egal","1234");
        Crypto crypto = new Crypto();
        Crypto crypto2 = new Crypto();
        addUser.addFavoriteCoins(crypto);
        addUser.addFavoriteCoins(crypto2);
        addUser.removeFavoriteCoins(crypto);
        assertFalse(addUser.getFavoriteCoins().contains(crypto));
        assertTrue(addUser.getFavoriteCoins().contains(crypto2));

    }

}