package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigDecimal;

@Entity
@Table
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private BigDecimal totalPrice;

    @Column
    private String dateRental;

    @Column
    private String hourRental;

    @Column
    private int duration;

    @ManyToOne
    @JoinColumn(name = "user_account_id")
    private UserAccount userAccount;

    public Rental(BigDecimal totalPrice, String dateRental, String hourRental, int duration) {
        this.totalPrice = totalPrice;
        this.dateRental = dateRental;
        this.hourRental = hourRental;
        this.duration = duration;
    }


    public Rental(Long id, BigDecimal totalPrice, String dateRental, String hourRental, int duration, UserAccount userAccount) {
        this.id = id;
        this.totalPrice = totalPrice;
        this.dateRental = dateRental;
        this.hourRental = hourRental;
        this.duration = duration;
        this.userAccount = userAccount;
    }


    public Rental() {
  
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getDateRental() {
        return dateRental;
    }

    public void setDateRental(String dateRental) {
        this.dateRental = dateRental;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    public String getHourRental() {
        return this.hourRental;
    }

    public void setHourRental(String hourRental) {
        this.hourRental = hourRental;
    }

    @Override
    public String toString() {
        return "Rental{" +
                "id=" + id +
                ", totalPrice=" + totalPrice +
                ", dateRental=" + dateRental +
                ", duration=" + duration +
                ", userAccount=" + userAccount +
                '}';
    }
}
