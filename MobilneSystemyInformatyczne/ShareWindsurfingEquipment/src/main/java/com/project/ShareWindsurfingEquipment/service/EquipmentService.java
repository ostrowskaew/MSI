package com.project.ShareWindsurfingEquipment.service;

import com.project.ShareWindsurfingEquipment.controller.dto.EquipmentDto;
import com.project.ShareWindsurfingEquipment.controller.form.EquipmentForm;
import com.project.ShareWindsurfingEquipment.factory.EquipmentFactory;
import com.project.ShareWindsurfingEquipment.model.Equipment;
import com.project.ShareWindsurfingEquipment.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;
    private final EquipmentFactory equipmentFactory;


    @Autowired
    public EquipmentService(EquipmentRepository equipmentRepository, EquipmentFactory equipmentFactory) {

        Assert.notNull(equipmentRepository, "equipmentRepository must not be null");
        Assert.notNull(equipmentFactory, "equipmentFactory must not be null");

        this.equipmentRepository = equipmentRepository;
        this.equipmentFactory = equipmentFactory;
    }


    public void addNewEquipment(Equipment equipmentForm) {
        equipmentForm.setId((Long) equipmentForm.getId());
        equipmentRepository.save(equipmentForm);
    }

    public Equipment getEquipmentById(Long id) {
        Optional<Equipment> optEquip = equipmentRepository.findById(id);
		if (optEquip.isPresent()){
		    Equipment pers = optEquip.get();
		    return pers;
		}
		else{
			return null;
		}
    }

    public List<Equipment> getAllEquipments() {

        List<Equipment> equipments = new ArrayList<>();
		equipmentRepository.findAll().forEach(equipments::add);
		return equipments;
    }

    public void deleteEquipment(Long id) {
		equipmentRepository.deleteById(id);
	}

    
}
