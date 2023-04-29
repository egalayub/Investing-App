package com.example.Investingapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;

@Entity(name = "MyUsers")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private  String userName;
    private  String firstName;
    private  String lastName;
    private  String password;
    @ManyToMany
    public Collection<Crypto> favoriteCoins = new HashSet<>();


public User(){

}
    public User(String userName, String firstName, String lastName, String password) {
        this.userName=userName;
        this.firstName = firstName;
        this.lastName= lastName;
        this.password=password;
    }

    public String getUserName() {
        return userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }
    public Collection <Crypto> getFavoriteCoins(){
    return favoriteCoins;
    }
    public void addFavoriteCoins(final Crypto favoriteCoin){
    favoriteCoins.add(favoriteCoin);
    }
    public void removeFavoriteCoin(final Crypto favoriteCoin){
    favoriteCoins.remove(favoriteCoins);
    }
    public  void setId (int id){
    this.id = id;
    }
}

