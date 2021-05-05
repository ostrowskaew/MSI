package com.project.ShareWindsurfingEquipment.repository;

import com.project.ShareWindsurfingEquipment.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
}
