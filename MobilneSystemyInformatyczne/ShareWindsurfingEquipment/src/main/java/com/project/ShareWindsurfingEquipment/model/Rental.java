package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigDecimal;
import java.util.Set;
import java.util.Set;

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
    private String lender;

    @Column
    private String status;

    public String getLender() {
        return this.lender;
    }

    public void setLender(String lender) {
        this.lender = lender;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Column
    private int duration;

    @ManyToOne
    @JoinColumn(name = "user_account_id")
    private UserAccount userAccount;

    @ManyToMany(mappedBy = "rental")
	private Set<Equipment> equipment;

    public Set<Equipment> getEquipments() {
        return this.equipment;
    }

    public void setEquipments(Set<Equipment> equipments) {
        this.equipment = equipments;
    }

    public Rental(BigDecimal totalPrice, String dateRental, String hourRental, int duration, Set<Equipment> equipments, String lender, String status) {
        this.totalPrice = totalPrice;
        this.dateRental = dateRental;
        this.hourRental = hourRental;
        this.duration = duration;
        this.lender = lender;
        this.status = status;
        this.equipment = equipments;
    }


    public Rental(Long id, BigDecimal totalPrice, String dateRental, String hourRental, int duration, UserAccount userAccount, Set<Equipment> equipment, String lender, String status) {
        this.id = id;
        this.totalPrice = totalPrice;
        this.dateRental = dateRental;
        this.hourRental = hourRental;
        this.duration = duration;
        this.userAccount = userAccount;
        this.equipment = equipment;
        this.lender = lender;
        this.status = status;
    }

    public Rental() {
  
    }

    public void addEquipment(Equipment equipment){ 
        this.equipment.add(equipment);
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
