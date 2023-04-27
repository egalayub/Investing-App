package com.example.Investingapp;

import com.example.Investingapp.entities.Crypto;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CryptoTest {
    @Test
    void getCoinName(){
        Crypto crypto = new Crypto("Bitcoin","Bitcoin is the original cryptocurrency","$29,594.41","#1","$68,789.63");
        assertEquals("Bitcoin",crypto.getName());
    }
    @Test
    void getCoinDescription(){
        Crypto crypto = new Crypto("Bitcoin","Bitcoin is the original cryptocurrency","$29,594.41","#1","$68,789.63");
        assertEquals("Bitcoin is the original cryptocurrency",crypto.getDescription());
    }
    @Test
    void getCoinCurrentValue(){
        Crypto crypto = new Crypto("Bitcoin","Bitcoin is the original cryptocurrency","$29,594.41","#1","$68,789.63");
        assertEquals("$29,594.41",crypto.getCurrentValue());
    }
    @Test
    void getCoinPopularity(){
        Crypto crypto = new Crypto("Bitcoin","Bitcoin is the original cryptocurrency","$29,594.41","#1","$68,789.63");
        assertEquals("#1",crypto.getPopularity());
    }
    @Test
    void getCoinAllTimeHigh(){
        Crypto crypto = new Crypto("Bitcoin","Bitcoin is the original cryptocurrency","$29,594.41","#1","$68,789.63");
        assertEquals("$68,789.63",crypto.getAllTimeHigh());
    }


}