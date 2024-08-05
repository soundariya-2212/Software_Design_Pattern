package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.template.model.LearningMaterial;

public interface LearningMaterialRepo extends JpaRepository<LearningMaterial, Long> {

}
