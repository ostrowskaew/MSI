package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ItemRentalKey implements Serializable {

    @Column(name = "rental_id")
    private Long rentalId;

    @Column(name = "equipment_id")
    private Long equipmentId;

    public Long getRentalId() {
        return rentalId;
    }

    public void setRentalId(Long rentalId) {
        this.rentalId = rentalId;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemRentalKey that = (ItemRentalKey) o;
        return Objects.equals(rentalId, that.rentalId) &&
                Objects.equals(equipmentId, that.equipmentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rentalId, equipmentId);
    }
}
