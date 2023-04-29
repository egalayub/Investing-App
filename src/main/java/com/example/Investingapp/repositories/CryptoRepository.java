package com.example.Investingapp.repositories;

import com.example.Investingapp.entities.Crypto;
import org.springframework.data.repository.CrudRepository;

public interface CryptoRepository extends CrudRepository<Crypto, Long> {
}
