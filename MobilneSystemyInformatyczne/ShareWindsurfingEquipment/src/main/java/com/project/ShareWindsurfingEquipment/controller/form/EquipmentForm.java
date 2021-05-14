package com.project.ShareWindsurfingEquipment.controller.form;

import java.math.BigDecimal;

public class EquipmentForm {
    private String brand;
    private String model;
    private String urlImage;
    private BigDecimal pricePerHour;
    private String size;
    private String description;
    private int year;
    private String equipmentType;

 
    public EquipmentForm(String brand, String model, String urlImage, BigDecimal pricePerHour, String size, String description, int year, String equipmentType) {
        this.brand = brand;
        this.model = model;
        this.urlImage = urlImage;
        this.pricePerHour = pricePerHour;
        this.size = size;
        this.description = description;
        this.year = year;
        this.equipmentType = equipmentType;
    }

    public EquipmentForm() {
    }

    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
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

    public BigDecimal getPricePerHour() {
        return this.pricePerHour;
    }

    public void setPricePerHour(BigDecimal pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getSize() {
        return this.size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getEquipmentType() {
        return this.equipmentType;
    }

    public void setEquipmentType(String equipmentType) {
        this.equipmentType = equipmentType;
    }


}
