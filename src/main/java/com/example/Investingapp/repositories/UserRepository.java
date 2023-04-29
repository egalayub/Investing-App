package com.example.Investingapp.repositories;

import com.example.Investingapp.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
