package com.project.ShareWindsurfingEquipment.repository;

import com.project.ShareWindsurfingEquipment.model.ItemRental;
import com.project.ShareWindsurfingEquipment.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRentalRepository extends JpaRepository<ItemRental, Long> {

    ItemRental getItemRentalByRental(Rental rental);
}
