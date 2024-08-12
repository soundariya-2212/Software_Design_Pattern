package com.security.template.service;

import com.security.template.model.LearningMaterial;
import com.security.template.repo.LearningMaterialRepo;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
// import java.util.Optional;
import java.util.UUID;
// import java.nio.file.Path;


@Service
public class LearningMaterialService {

     @Autowired
    private LearningMaterialRepo materialRepository;

    private final Path rootLocation = Paths.get("uploaded-materials");

    public void saveMaterial(Long courseId, MultipartFile file, String title, String type) {
        try {
            Files.createDirectories(rootLocation);
            Path filePath = rootLocation.resolve(file.getOriginalFilename());
            Files.copy(file.getInputStream(), filePath);
            LearningMaterial material = new LearningMaterial();
            material.setId(courseId);
            material.setTitle(title);
            material.setType(type);
            material.setUrl(filePath.toString());
            materialRepository.save(material);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }

    public List<Material> getMaterials(Long courseId) {
        return materialRepository.findByCourseId(courseId);
    }
}