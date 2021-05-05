package com.project.ShareWindsurfingEquipment.factory;

import com.project.ShareWindsurfingEquipment.controller.form.UserForm;
import com.project.ShareWindsurfingEquipment.model.LoginRequest;
import com.project.ShareWindsurfingEquipment.model.UserAccount;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserFactory {

    public UserAccount createUser(UserForm userForm) {

        userForm.setPassword(new BCryptPasswordEncoder().encode(userForm.getPassword()));

        return new UserAccount(
                userForm.getLogin(),
                userForm.getPassword(),
                userForm.getEmail(),
                userForm.getDescription(),
                userForm.isInstructor(),
                userForm.getPricePerHour(),
                userForm.getRole()
        );
    }

    public LoginRequest createLoginRequest(UserAccount userAccount) {

        return new LoginRequest(
                userAccount.getLogin(),
                userAccount.getPassword());
    }
}
