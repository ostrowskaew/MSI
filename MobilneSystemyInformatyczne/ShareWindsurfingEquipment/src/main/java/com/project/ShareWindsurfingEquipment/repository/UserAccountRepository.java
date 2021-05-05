package com.project.ShareWindsurfingEquipment.repository;

import com.project.ShareWindsurfingEquipment.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    UserAccount getByLogin(String login);
}
