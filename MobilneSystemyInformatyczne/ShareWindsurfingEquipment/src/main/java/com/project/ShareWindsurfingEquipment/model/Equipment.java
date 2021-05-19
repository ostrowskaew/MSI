package com.project.ShareWindsurfingEquipment.model;

import com.project.ShareWindsurfingEquipment.common.EquipmentType;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String brand;

    @Column
    private String model;

    @Column
    private String urlImage;

    @Column
    private BigDecimal pricePerHour;

    @Column
    private String lenderInstructor;

    @Column
    private String size;

    @Column
    private String description;

    @Column
    private int year;

    @Enumerated(EnumType.STRING)
    @Column
    private EquipmentType equipmentType;

    public Equipment() {
    }

    public Equipment(String brand, String model, String urlImage, BigDecimal pricePerHour, String lenderInstructor, String size, String description, int year, String equipmentType) {
        this.brand = brand;
        this.model = model;
        this.urlImage = urlImage;
        this.pricePerHour = pricePerHour;
        this.lenderInstructor = lenderInstructor;
        this.size = size;
        this.description = description;
        this.year = year;
        this.equipmentType = EquipmentType.valueOf(equipmentType);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public BigDecimal getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(BigDecimal pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getLenderInstructor() {
        return lenderInstructor;
    }

    public void setLenderInstructor(String lenderInstructor) {
        this.lenderInstructor = lenderInstructor;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public void setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
    }

    public String getModel() {
        return this.model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getUrlImage() {
        return this.urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    @Override
    public String toString() {
        return "Equipment{" +
                "id=" + id +
                ", brand='" + brand +
                ", pricePerHour=" + pricePerHour +
                ", lenderInstructor=" + lenderInstructor +
                ", size='" + size +
                ", description='" + description +
                ", year=" + year +
                ", equipmentType=" + equipmentType +
                '}';
    }
}