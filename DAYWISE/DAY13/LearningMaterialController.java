package com.security.template.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.security.template.model.LearningMaterial;
import com.security.template.service.LearningMaterialService;

import java.util.List;

@RestController
@RequestMapping("/learning")
public class LearningMaterialController {

    @Autowired
    private LearningMaterialService learningMaterialService;

    @GetMapping
    public List<LearningMaterial> getAllLearningMaterials() {
        return learningMaterialService.getAllLearningMaterials();
    }

    @PostMapping("/{courseID}")
    public ResponseEntity<LearningMaterial> createLearningMaterial(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("type") String type,
            @PathVariable Long courseID) {
        // Store the file and get the URL
        String fileUrl = learningMaterialService.storeFile(file);

        // Create LearningMaterial object with the URL
        LearningMaterial learningMaterial = new LearningMaterial();
        learningMaterial.setTitle(title);
        learningMaterial.setType(type);
        learningMaterial.setUrl(fileUrl);
        learningMaterial.setId(courseID);

        // Save the learning material using service
        return ResponseEntity.ok(learningMaterialService.createLearningMaterial(learningMaterial));
    }
}
