package com.project.ShareWindsurfingEquipment.service;

import com.project.ShareWindsurfingEquipment.common.ResourceNotFoundException;
import com.project.ShareWindsurfingEquipment.jwt.UserPrincipal;
import com.project.ShareWindsurfingEquipment.model.UserAccount;
import com.project.ShareWindsurfingEquipment.repository.UserAccountRepository;
import io.jsonwebtoken.lang.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserPrincipalService implements UserDetailsService {

    private final UserAccountRepository userAccountRepository;


    public UserPrincipalService(UserAccountRepository userAccountRepository) {

        Assert.notNull(userAccountRepository, "userAccountRepository must not be null");

        this.userAccountRepository = userAccountRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        UserAccount userAccount = userAccountRepository.getByLogin(s);

        if (userAccount == null) {
            throw new ResourceNotFoundException("User", s);
        }

        return new UserPrincipal(userAccount.getLogin(), userAccount.getPassword(), userAccount.getRole().name());
    }
}
