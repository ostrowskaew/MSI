package com.project.ShareWindsurfingEquipment.factory;

import com.project.ShareWindsurfingEquipment.controller.dto.EquipmentDto;
import com.project.ShareWindsurfingEquipment.controller.form.EquipmentForm;
import com.project.ShareWindsurfingEquipment.model.Equipment;
import org.springframework.stereotype.Service;

@Service
public class EquipmentFactory {

    public Equipment createEquipment(EquipmentForm equipmentForm) {

        return new Equipment();
    }

    public EquipmentDto createEquipmentDto(Equipment equipment) {

        return new EquipmentDto(equipment.getId());
    }
}
