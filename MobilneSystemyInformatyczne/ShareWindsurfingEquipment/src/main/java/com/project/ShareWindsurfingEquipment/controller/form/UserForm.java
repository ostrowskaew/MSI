package com.project.ShareWindsurfingEquipment.controller.form;

import com.project.ShareWindsurfingEquipment.common.Role;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.math.BigDecimal;

public class UserForm {

    private String login;
    private String password;
    private String email;
    private String description;
    private boolean instructor;
    private BigDecimal pricePerHour;
    private String role;

    public UserForm(String login, String password, String email, String description, boolean instructor, BigDecimal pricePerHour, String role) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.description = description;
        this.instructor = instructor;
        this.pricePerHour = pricePerHour;
        this.role = role;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
