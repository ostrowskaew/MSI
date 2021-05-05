package com.project.ShareWindsurfingEquipment.service;

import com.project.ShareWindsurfingEquipment.controller.dto.EquipmentDto;
import com.project.ShareWindsurfingEquipment.controller.form.EquipmentForm;
import com.project.ShareWindsurfingEquipment.factory.EquipmentFactory;
import com.project.ShareWindsurfingEquipment.model.Equipment;
import com.project.ShareWindsurfingEquipment.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;
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


    public void addNewEquipment(EquipmentForm equipmentForm) {

        Assert.notNull(equipmentForm, "equipmentForm must not be null");

        Equipment equipment = equipmentFactory.createEquipment(equipmentForm);

        equipmentRepository.save(equipment);
    }

    public EquipmentDto getEquipmentById(Long id) {

        Assert.notNull(id, "id must not be null");

        Equipment equipment = equipmentRepository.getOne(id);

        return equipmentFactory.createEquipmentDto(equipment);
    }

    public List<EquipmentDto> getAllEquipments() {

        List<Equipment> equipmentList = equipmentRepository.findAll();

        return equipmentList.stream()
                .map(equipmentFactory::createEquipmentDto)
                .collect(Collectors.toList());
    }
}
