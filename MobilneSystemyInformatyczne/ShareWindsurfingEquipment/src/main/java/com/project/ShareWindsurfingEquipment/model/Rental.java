package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private BigDecimal totalPrice;

    @Column
    private LocalDate dateRental;

    @Column
    private int duration;

    @ManyToOne
    @JoinColumn(name = "user_account_id")
    private UserAccount userAccount;

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

    public LocalDate getDateRental() {
        return dateRental;
    }

    public void setDateRental(LocalDate dateRental) {
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
