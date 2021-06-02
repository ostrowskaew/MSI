package com.project.ShareWindsurfingEquipment.controller;

import java.util.List;

import com.project.ShareWindsurfingEquipment.model.Rental;
import com.project.ShareWindsurfingEquipment.service.RentalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.lang.Assert;

@RestController
@CrossOrigin
@RequestMapping("/rental")
class RentalController {
    RentalService rentalService;

    @Autowired
    public RentalController(RentalService rentalService) {

        Assert.notNull(rentalService, "rentalService must not be null");

        this.rentalService = rentalService;
    }

    @GetMapping
    public ResponseEntity<List<Rental>> getAllRentals() {

        return ResponseEntity.ok(rentalService.getAllRentals());
    }

    @GetMapping("/user/{login}")
    public ResponseEntity<List<Rental>> getUsersRentals(@PathVariable String login) {

        return ResponseEntity.ok(rentalService.getUsersRentals(login));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rental> getRentalById(@PathVariable Long id) {

        return ResponseEntity.ok(rentalService.getRentalById(id));
    }


    @PostMapping
    public ResponseEntity<Rental> addRental(@RequestBody Rental rental) {
    
        return ResponseEntity.ok(rentalService.addNewRental(rental));
    }

    @DeleteMapping("/{id}")
	public void deleteRental(@PathVariable Long id) {
		rentalService.deleteRental(id);
	}
    
}
