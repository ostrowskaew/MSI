package com.project.ShareWindsurfingEquipment.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.project.ShareWindsurfingEquipment.model.Rental;
import com.project.ShareWindsurfingEquipment.model.UserAccount;
import com.project.ShareWindsurfingEquipment.repository.RentalRepository;

import com.project.ShareWindsurfingEquipment.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentalService {

    @Autowired
    RentalRepository rentalRepository;

    @Autowired
    UserAccountRepository accountRepository;

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

        UserAccount account = accountRepository.getByLogin(login);

		return rentalRepository.getAllByUserAccount(account);
    }

    public List<Rental> getOwnerRentals(String lender) {

		return rentalRepository.findByLender(lender);
    }

    public Rental updateStatus(String status, String rentalId) {
       
        Rental rental= getRentalById(Long.parseLong(rentalId));

        rental.setStatus(status);
        rentalRepository.save(rental);
        return rental;

    }
}
