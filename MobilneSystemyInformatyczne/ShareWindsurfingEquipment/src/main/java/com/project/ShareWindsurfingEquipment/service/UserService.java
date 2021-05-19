package com.project.ShareWindsurfingEquipment.service;

import java.util.Optional;

import com.project.ShareWindsurfingEquipment.common.ResourceNotFoundException;
import com.project.ShareWindsurfingEquipment.controller.form.UserForm;
import com.project.ShareWindsurfingEquipment.factory.UserFactory;
import com.project.ShareWindsurfingEquipment.model.LoginRequest;
import com.project.ShareWindsurfingEquipment.model.UserAccount;
import com.project.ShareWindsurfingEquipment.repository.UserAccountRepository;
import io.jsonwebtoken.lang.Assert;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserAccountRepository userAccountRepository;
    private final UserFactory userFactory;

    public UserService(UserAccountRepository userAccountRepository, UserFactory userFactory) {

        Assert.notNull(userAccountRepository, "userAccountRepository must not be null");
        Assert.notNull(userFactory, "userFactory must not be null");

        this.userAccountRepository = userAccountRepository;
        this.userFactory = userFactory;
    }

    public LoginRequest saveOrUpdate(UserForm userForm) {

        UserAccount userAccount = userFactory.createUser(userForm);
        UserAccount savedUser = userAccountRepository.save(userAccount);

        return userFactory.createLoginRequest(savedUser);
    }

    public UserAccount getUserByUsername(String login) { 
        UserAccount userAccount = userAccountRepository.getByLogin(login);

        if (userAccount == null) {
            throw new ResourceNotFoundException("User", login);
        }

        return userAccount;
    }
}
