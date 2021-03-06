package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table
public class RentalReview {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String review;

    @Column
    private BigDecimal rating;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public BigDecimal getRating() {
        return rating;
    }

    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }


    @Override
    public String toString() {
        return "RentalReview{" +
                "id=" + id +
                ", review='" + review + '\'' +
                ", rating=" + rating +
                '}';
    }
}
