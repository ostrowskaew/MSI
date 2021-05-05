package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;

@Entity
public class ItemRental {

    @EmbeddedId
    private ItemRentalKey id;

    @ManyToOne
    @MapsId("rentalId")
    @JoinColumn(name = "rental_id")
    private Rental rental;

    @ManyToOne
    @MapsId("equipmentId")
    @JoinColumn(name = "equipment_id")
    private Equipment equipment;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "rental_review_id", referencedColumnName = "id")
    private RentalReview rentalReview;

    public ItemRentalKey getId() {
        return id;
    }

    public void setId(ItemRentalKey id) {
        this.id = id;
    }

    public Rental getRental() {
        return rental;
    }

    public void setRental(Rental rental) {
        this.rental = rental;
    }

    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }

    public RentalReview getRentalReview() {
        return rentalReview;
    }

    public void setRentalReview(RentalReview rentalReview) {
        this.rentalReview = rentalReview;
    }

    @Override
    public String toString() {
        return "ItemRental{" +
                "id=" + id +
                ", rental=" + rental +
                ", equipment=" + equipment +
                ", rentalReview=" + rentalReview +
                '}';
    }
}
