package com.example.Investingapp.restControllers;

import com.example.Investingapp.repositories.CryptoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;


@RestController
public class CryptoController {
    final private CryptoRepository cryptoRepository;
    final String allCoins = "https://api.coinlore.net/api/tickers/";
    final String coinByID = "https://api.coinlore.net/api/ticker/?id={id}";

    public CryptoController(CryptoRepository cryptoRepository) {
        this.cryptoRepository = cryptoRepository;
    }

    @Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping(value = "/api/coins", produces = "application/json")
    public String getAllCoins() {
        return webClientBuilder.build()
                .get()
                .uri(allCoins)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }

    @GetMapping(value = "api/coins/{id}", produces = "application/json")
    public String getCoinByID(@PathVariable("id") String coinID) {
        return webClientBuilder.build()
                .get()
                .uri(coinByID, coinID)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }


}
