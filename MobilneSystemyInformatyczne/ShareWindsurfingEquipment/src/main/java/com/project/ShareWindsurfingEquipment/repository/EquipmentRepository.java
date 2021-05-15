package com.project.ShareWindsurfingEquipment.repository;

import java.util.List;

import com.project.ShareWindsurfingEquipment.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    public List<Equipment> findByLenderInstructor(Long lender);
}
