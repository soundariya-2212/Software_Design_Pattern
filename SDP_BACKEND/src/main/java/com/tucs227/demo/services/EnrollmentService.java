package com.tucs227.demo.services;

import com.tucs227.demo.models.Course;
import com.tucs227.demo.models.Enrollment;
import com.tucs227.demo.models.User;
import com.tucs227.demo.repo.EnrollmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepo enrollmentRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CourseService courseService;

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Optional<Enrollment> getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id);
    }

    public Enrollment createEnrollment(Enrollment enrollment, Long courseID, Long userID) {
        User obj = userService.getUserById(userID);
        enrollment.setUser(obj);
        Course obj1 = courseService.getCourseById(courseID);
        enrollment.setCourse(obj1);
        return enrollmentRepository.save(enrollment);
    }

    public Enrollment updateEnrollment(Long id, Enrollment enrollment) {
        if (enrollmentRepository.existsById(id)) {
            enrollment.setId(id);
            return enrollmentRepository.save(enrollment);
        } else {
            return null;
        }
    }

    public boolean deleteEnrollment(Long id) {
        if (enrollmentRepository.existsById(id)) {
            enrollmentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
