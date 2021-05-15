package com.project.ShareWindsurfingEquipment.controller;

import com.project.ShareWindsurfingEquipment.controller.dto.EquipmentDto;
import com.project.ShareWindsurfingEquipment.controller.form.EquipmentForm;
import com.project.ShareWindsurfingEquipment.model.Equipment;
import com.project.ShareWindsurfingEquipment.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.List;

import static com.project.ShareWindsurfingEquipment.controller.EquipmentController.URL_PATH;

@RestController
@CrossOrigin
@RequestMapping(URL_PATH)
class EquipmentController {

    public static final String URL_PATH = "/equipment";

    private final EquipmentService equipmentService;


    @Autowired
    public EquipmentController(EquipmentService equipmentService) {

        Assert.notNull(equipmentService, "equipmentService must not be null");

        this.equipmentService = equipmentService;
    }


    @GetMapping
    public ResponseEntity<List<Equipment>> getAllEquipments() {

        return ResponseEntity.ok(equipmentService.getAllEquipments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipment> getEquipmentById(@PathVariable Long id) {

        return ResponseEntity.ok(equipmentService.getEquipmentById(id));
    }


    @PostMapping
    public ResponseEntity<Equipment> addEquipment(@RequestBody Equipment equipmentForm) {
    
        equipmentService.addNewEquipment(equipmentForm);

        return null;
    }

    @DeleteMapping("/{id}")
	public void deleteEquipment(@PathVariable Long id) {
		 equipmentService.deleteEquipment(id);
	}

    
}
