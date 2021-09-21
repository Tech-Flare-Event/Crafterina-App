package com.crafterina.backend.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "gen_user")
@Data
public class GenUser extends User{


    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "telNo",length = 10)
    private String telNo;

    @Column(name = "imageUrl")
    private String imageUrl;


    @Override
    public Role getRole() {
        return Role.GENERAL_USER;
    }

    public GenUser(){
        super();
    }

    public GenUser(String username, String password, String email, String fname, String lname, String telNo, String imageUrl) {
        super(username, password, email);
        this.fname = fname;
        this.lname = lname;
        this.telNo = telNo;
        this.imageUrl = imageUrl;
    }
}
