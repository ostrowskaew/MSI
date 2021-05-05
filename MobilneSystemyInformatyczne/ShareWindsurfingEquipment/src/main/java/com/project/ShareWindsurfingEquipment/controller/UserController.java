package com.project.ShareWindsurfingEquipment.controller;

import com.project.ShareWindsurfingEquipment.controller.form.UserForm;
import com.project.ShareWindsurfingEquipment.model.LoginRequest;
import com.project.ShareWindsurfingEquipment.service.UserService;
import io.jsonwebtoken.lang.Assert;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
class UserController {

    private final UserService userService;


    public UserController(UserService userService) {

        Assert.notNull(userService, "userService must not be null");

        this.userService = userService;
    }


    @PostMapping
    private LoginRequest addUser(@RequestBody UserForm userForm) {

        return userService.saveOrUpdate(userForm);
    }
}
