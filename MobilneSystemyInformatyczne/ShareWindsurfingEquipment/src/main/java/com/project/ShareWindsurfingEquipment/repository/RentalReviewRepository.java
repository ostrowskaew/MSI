package com.project.ShareWindsurfingEquipment.repository;

import com.project.ShareWindsurfingEquipment.model.RentalReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RentalReviewRepository extends JpaRepository<RentalReview, Long> {
}
