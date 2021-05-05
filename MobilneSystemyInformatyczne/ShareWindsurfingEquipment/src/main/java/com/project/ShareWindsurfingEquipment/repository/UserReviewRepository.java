package com.project.ShareWindsurfingEquipment.repository;

import com.project.ShareWindsurfingEquipment.model.UserReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserReviewRepository extends JpaRepository<UserReview, Long> {
}
