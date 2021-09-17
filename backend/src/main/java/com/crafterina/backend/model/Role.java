package com.crafterina.backend.model;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {

    GENERAL_USER,
    ADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}
