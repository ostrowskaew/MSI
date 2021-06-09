package com.project.ShareWindsurfingEquipment.controller;

import com.project.ShareWindsurfingEquipment.model.ItemRental;
import com.project.ShareWindsurfingEquipment.service.ItemRentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/itemRental")
public class ItemRentalController {

    private final ItemRentalService itemRentalService;

    @Autowired
    public ItemRentalController(ItemRentalService itemRentalService) {

        this.itemRentalService = itemRentalService;
    }

    @GetMapping("/{rentalId}")
    public ResponseEntity<ItemRental> getItemRental(Long rentalId) {

        return ResponseEntity.ok(itemRentalService.getItemRentalByRentalId(rentalId));
    }
}
