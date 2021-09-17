package com.crafterina.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "item")
@Data
public class Item {

    @Id
    @Column(name = "itemId")
    private long itemId;

    @Column(name ="itemName",nullable = false)
    private String itemName;

    @Column(name ="category",nullable = false)
    private String category;

    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;

    @Column(name = "description")
    private String description;

    @Column(name = "tools")
    private String tools;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "item")
    private List<Image> imageList;

    public Item() {
    }

    public Item(long itemId, String itemName, String category, Date createdAt, String description, String tools, List<Image> imageList) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.createdAt = createdAt;
        this.description = description;
        this.tools = tools;
        this.imageList = imageList;
    }
}
