package com.crafterina.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "user", uniqueConstraints = @UniqueConstraint(columnNames = "username"))
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private long id;

    @Column(name = "username", nullable = false, length = 20)
    private String username;

    @Column(name = "password", nullable = false, length = 64)
    private String password;

    @Column(name = "email", nullable = false, length = 45)
    private String email;

    public abstract Role getRole();

    public User() {
    }

    public User( String username, String password, String email) {

        this.username = username;
        this.password = password;
        this.email = email;
    }
}
