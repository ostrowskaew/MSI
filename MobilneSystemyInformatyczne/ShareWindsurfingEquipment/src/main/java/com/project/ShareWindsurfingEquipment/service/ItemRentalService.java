package com.project.ShareWindsurfingEquipment.service;

import com.project.ShareWindsurfingEquipment.model.ItemRental;
import com.project.ShareWindsurfingEquipment.model.Rental;
import com.project.ShareWindsurfingEquipment.repository.ItemRentalRepository;
import com.project.ShareWindsurfingEquipment.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemRentalService {

    private final ItemRentalRepository itemRentalRepository;
    private final RentalRepository rentalRepository;

    @Autowired
    public ItemRentalService(ItemRentalRepository itemRentalRepository, RentalRepository rentalRepository) {

        this.itemRentalRepository = itemRentalRepository;
        this.rentalRepository = rentalRepository;
    }


    public ItemRental getItemRentalByRentalId(Long rentalId) {

        Optional<Rental> optionalRental = rentalRepository.findById(rentalId);

        return optionalRental
                .map(itemRentalRepository::getItemRentalByRental)
                .orElse(null);
    }
}
