package com.project.ShareWindsurfingEquipment.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.project.ShareWindsurfingEquipment.model.Rental;
import com.project.ShareWindsurfingEquipment.repository.RentalRepository;

public class RentalService {

    RentalRepository rentalRepository;

    public Rental addNewRental(Rental rental) {
        return rentalRepository.save(rental);
    }

    public Rental getRentalById(Long id) {
        Optional<Rental> optRental = rentalRepository.findById(id);
		if (optRental.isPresent()){
		    Rental pers = optRental.get();
		    return pers;
		}
		else{
			return null;
		}
    }

    public List<Rental> getAllRentals() {

        List<Rental> rentals = new ArrayList<>();
		rentalRepository.findAll().forEach(rentals::add);
		return rentals;
    }

    public void deleteRental(Long id) {
        rentalRepository.deleteById(id);
    }

    public List<Rental> getUsersRentals(String login) {
		return null;
    }
}
