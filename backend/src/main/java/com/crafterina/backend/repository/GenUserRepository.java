package com.crafterina.backend.repository;

import com.crafterina.backend.model.GenUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenUserRepository extends JpaRepository<GenUser,Long> {
}
