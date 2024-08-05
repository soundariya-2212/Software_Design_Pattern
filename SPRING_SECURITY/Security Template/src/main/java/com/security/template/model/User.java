// package com.security.template.model;

// import java.util.Collection;
// import java.util.List;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;

// import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonIgnore;

// import jakarta.persistence.Entity;
// import jakarta.persistence.Enumerated;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;
// import lombok.Getter;
// import lombok.Setter;

// @Entity
// @Getter
// @Setter
// public class User implements UserDetails {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long uid;

//     private String name;
//     private String email;
//     private String password;
//     // private String role;

//      @JsonBackReference
//     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private List<Token> tokens;

//     @Enumerated(EnumType.STRING)
//     private Role role;

//     @OneToMany(mappedBy = "user")
//     @JsonIgnore
//     private List<Course> courses;

//     @OneToMany(mappedBy = "user")
//     @JsonIgnore
//     private List<Enrollment> enrollments;

//     @OneToMany(mappedBy = "user")
//     @JsonIgnore
//     private List<Course> createdCourses;

//     @OneToMany(mappedBy = "user")
//     @JsonIgnore
//     private List<Assignment> assignments;

//     public User() {
//     }

//     public User(Long uid, String name, String email, String password,
//             List<Course> courses, List<Enrollment> enrollments, List<Course> createdCourses,
//             List<Assignment> assignments) {
//         this.uid = uid;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         // this.role = role;
//         this.courses = courses;
//         this.enrollments = enrollments;
//         this.createdCourses = createdCourses;
//         this.assignments = assignments;
//     }

//     @Override
//     public Collection<? extends GrantedAuthority> getAuthorities() {
//         return List.of(new SimpleGrantedAuthority(role.name()));
//     }

//     @Override
//     public String getUsername() {
//         return email;
//     }

//     @Override
//     public boolean isAccountNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isAccountNonLocked() {
//         return true;
//     }

//     @Override
//     public boolean isCredentialsNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isEnabled() {
//         return true;
//     }
// }

package com.security.template.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.security.template.enums.Role;

import jakarta.persistence.CascadeType;
// import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @JsonBackReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Token> tokens;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Course> courses;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Enrollment> enrollments;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Course> createdCourses;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Assignment> assignments;

    public User() {
    }

    public User(Long uid, String name, String email, String password, Role role,
            List<Course> courses, List<Enrollment> enrollments, List<Course> createdCourses,
            List<Assignment> assignments) {
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.courses = courses;
        this.enrollments = enrollments;
        this.createdCourses = createdCourses;
        this.assignments = assignments;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
