package com.example.Investingapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;

@Entity
public class Crypto {
    @Id
    @GeneratedValue()
    private int id;
    private String name;
    private String description;
    private String currentValue;
    private String popularity;
    private String allTimeHigh;
    @JsonIgnore
    @ManyToMany
    @JoinTable
    private final Collection<User> userLikes = new HashSet<>();

    public Crypto() {
    }

    public Crypto(String name, String description, String currentValue, String popularity, String allTimeHigh) {
        this.name = name;
        this.description = description;
        this.currentValue = currentValue;
        this.popularity = popularity;
        this.allTimeHigh = allTimeHigh;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Collection<User> getUserLikes() {
        return this.userLikes;
    }

    public void setUserLikes(User user) {
        userLikes.add(user);
    }

    public String getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(String currentValue) {
        this.currentValue = currentValue;
    }

    public String getPopularity() {
        return popularity;
    }

    public void setPopularity(String popularity) {
        this.popularity = popularity;
    }

    public String getAllTimeHigh() {
        return allTimeHigh;
    }

    public void setAllTimeHigh(String allTimeHigh) {
        this.allTimeHigh = allTimeHigh;
    }

}
