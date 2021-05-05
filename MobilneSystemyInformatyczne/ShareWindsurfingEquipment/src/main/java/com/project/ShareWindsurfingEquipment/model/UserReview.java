package com.project.ShareWindsurfingEquipment.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table
public class UserReview {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String content;

    @Column
    private int rating;

    @Column
    private String reviewerLogin;

    @Column
    private String postReviewLogin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReviewerLogin() {
        return reviewerLogin;
    }

    public void setReviewerLogin(String reviewerLogin) {
        this.reviewerLogin = reviewerLogin;
    }

    public String getPostReviewLogin() {
        return postReviewLogin;
    }

    public void setPostReviewLogin(String postReviewLogin) {
        this.postReviewLogin = postReviewLogin;
    }

    @Override
    public String toString() {
        return "UserReview{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", rating=" + rating +
                ", reviewerLogin='" + reviewerLogin + '\'' +
                ", postReviewLogin='" + postReviewLogin + '\'' +
                '}';
    }
}
