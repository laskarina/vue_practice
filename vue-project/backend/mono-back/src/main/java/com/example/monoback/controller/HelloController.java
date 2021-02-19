package com.example.monoback.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class HelloController {
    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public Map<String, String> hello() {
        return Collections.singletonMap("message", "Hello, World!");
    }

}




