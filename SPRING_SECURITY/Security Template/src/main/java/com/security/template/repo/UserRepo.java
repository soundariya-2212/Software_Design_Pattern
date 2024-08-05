package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

    User findByEmail(String email);

    boolean existsByName(String name);

    void deleteByName(String name);

}
