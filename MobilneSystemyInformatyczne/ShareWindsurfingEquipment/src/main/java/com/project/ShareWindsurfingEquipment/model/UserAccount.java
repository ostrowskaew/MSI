package com.project.ShareWindsurfingEquipment.model;

import com.project.ShareWindsurfingEquipment.common.Role;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table
public class UserAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String login;

    @Column
    private String password;

    @Column
    private String email;

    @Column
    private String description;

    @Column
    private boolean instructor;

    @Column
    private BigDecimal pricePerHour;

    @Enumerated(EnumType.STRING)
    @Column
    private Role role;


    public UserAccount() {
    }

    public UserAccount(String login, String password, String email, String description, boolean instructor, BigDecimal pricePerHour, String role) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.description = description;
        this.instructor = instructor;
        this.pricePerHour = pricePerHour;
        this.role = Role.valueOf(role);
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isInstructor() {
        return instructor;
    }

    public void setInstructor(boolean instructor) {
        this.instructor = instructor;
    }

    public BigDecimal getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(BigDecimal pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserAccount{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", description='" + description + '\'' +
                ", instructor=" + instructor +
                ", pricePerHour=" + pricePerHour +
                ", role=" + role +
                '}';
    }
}
