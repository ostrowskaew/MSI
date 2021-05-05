package com.project.ShareWindsurfingEquipment.controller;

import com.project.ShareWindsurfingEquipment.jwt.TokenProvider;
import com.project.ShareWindsurfingEquipment.model.LoginRequest;
import com.project.ShareWindsurfingEquipment.model.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/userLogin")
class UserLoginController {

    private AuthenticationManager authenticationManager;
    private TokenProvider tokenProvider;


    public UserLoginController(AuthenticationManager authenticationManager, TokenProvider tokenProvider) {

        Assert.notNull(authenticationManager, "authenticationManager must not be null");
        Assert.notNull(tokenProvider, "tokenProvider must not be null");

        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }


    @PostMapping("/logIn")
    private ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getLogin(),loginRequest.getPassword()));
        String token = tokenProvider.generateToken(authentication);
        LoginResponse loginResponse = new LoginResponse(token,authentication.getAuthorities().toString());

        return ResponseEntity.ok(loginResponse);
    }
}
