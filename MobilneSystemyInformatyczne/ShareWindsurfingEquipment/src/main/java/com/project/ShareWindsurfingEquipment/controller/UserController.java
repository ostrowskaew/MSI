package com.project.ShareWindsurfingEquipment.controller;

import java.math.BigDecimal;

import com.project.ShareWindsurfingEquipment.controller.form.UserForm;
import com.project.ShareWindsurfingEquipment.model.LoginRequest;
import com.project.ShareWindsurfingEquipment.model.UserAccount;
import com.project.ShareWindsurfingEquipment.service.UserService;
import io.jsonwebtoken.lang.Assert;

import org.springframework.http.ResponseEntity;
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

    @GetMapping("/{username}")
    public ResponseEntity<UserAccount> getUserAccountByLogin(@PathVariable String username) {

        return ResponseEntity.ok(userService.getUserByUsername(username));
    }

    @PostMapping("/description/{description}/{username}")
    public void updateDescription(@PathVariable String description, @PathVariable String username) {

        userService.updateDescription(username, description);
        
    }

    @PostMapping("/price/{price}/{username}")
    public void updatePricePerHour(@PathVariable BigDecimal price, @PathVariable String username) {
        userService.updatePricePerHour(username, price);
        
    }

    @PostMapping("/instructor/{isInstructor}/{username}")
    public void updateIsInstructor(@PathVariable Boolean isInstructor, @PathVariable String username) {

        userService.updateIsInstructor(username, isInstructor);
        
    }

    @PostMapping("/role/{role}/{username}")
    public void updateRole(@PathVariable String role, @PathVariable String username) {

        userService.updateRole(username, role);
        
    }
    
}
