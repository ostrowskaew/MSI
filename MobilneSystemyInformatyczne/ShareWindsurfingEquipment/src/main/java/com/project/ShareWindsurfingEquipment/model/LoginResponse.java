package com.project.ShareWindsurfingEquipment.model;

import io.jsonwebtoken.lang.Assert;
import lombok.Value;

@Value
public class LoginResponse {

    private String token;
    private String role;

    public LoginResponse(String token, String role) {

        Assert.notNull(token, "token must not be null");
        Assert.notNull(role, "role must not be null");

        this.token = token;
        this.role = role;
    }
}
