package com.crafterina.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "feedback")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long fid;

    @Column(name = "starCount")
    private int starCount=0;

    @Column(name = "review")
    private String review;

    @Column(name = "uid",nullable = false)
    private long uid;

    @Column(name = "iid",nullable = false)
    private long iid;

    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;

}
