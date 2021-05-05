package com.project.ShareWindsurfingEquipment.model;

import io.jsonwebtoken.lang.Assert;
import lombok.Value;

@Value
public class LoginRequest {

    private String login;
    private String password;

    public LoginRequest(String login, String password) {

        Assert.notNull(login, "login must not be null");
        Assert.notNull(password, "password must not be null");

        this.login = login;
        this.password = password;
    }
}
