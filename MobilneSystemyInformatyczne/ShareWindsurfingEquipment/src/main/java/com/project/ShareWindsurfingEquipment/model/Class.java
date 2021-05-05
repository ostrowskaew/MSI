package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;

@Entity
@Table
public class Class {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String level;

    @ManyToOne
    @JoinColumn(name = "rental_id")
    private Rental rental;

    @ManyToOne
    @JoinColumn(name = "user_account_id")
    private UserAccount userAccount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public Rental getRental() {
        return rental;
    }

    public void setRental(Rental rental) {
        this.rental = rental;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    @Override
    public String toString() {
        return "Class{" +
                "id=" + id +
                ", level='" + level + '\'' +
                ", rental=" + rental +
                ", userAccount=" + userAccount +
                '}';
    }
}
