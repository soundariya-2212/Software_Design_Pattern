package com.security.template.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.security.template.auth.AuthenticationResponse;
import com.security.template.auth.RegisterRequest;
import com.security.template.auth.UserUpdateRequest;
import com.security.template.auth.AuthenticationRequest;
import com.security.template.auth.AuthenticationService;
import com.security.template.auth.ChangePasswordRequest;
import com.security.template.enums.Role;
import com.security.template.model.Token;
import com.security.template.model.User;
import com.security.template.repo.TokenRepo;
import com.security.template.repo.UserRepo;
import com.security.template.service.AuthService;
import com.security.template.config.JwtService;

import lombok.*;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    @Autowired
    private  UserRepo userRepo;
    private final TokenRepo tokenRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtUtil;

    @Override
    public User findUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public String register(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepo.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.valueOf(registerRequest.getRole().toUpperCase())) // Convert to uppercase
                .build();
        userRepo.save(user);
        return "User registered successfully.";
    }

    @Override
    public AuthenticationResponse login(AuthenticationRequest loginRequest) {
        try {
            // Authenticate the user
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            
            // Fetch user details from the repository
            var user = userRepo.findByEmail(loginRequest.getEmail());
            
            // Create extra claims for the JWT token
            Map<String, Object> extraClaims = new HashMap<>();
            extraClaims.put("role", user.getRole().toString());
            
            // Generate the access token
            String accessToken = jwtUtil.generateToken(extraClaims, user);
            
            // Revoke all existing tokens for the user
            revokeAllUserTokens(user);
            
            // Save the new token
            saveUserToken(user, accessToken);
            
            // Return the authentication response
            return AuthenticationResponse.builder()
                    .accessToken(accessToken)
                    .role(user.getRole().toString()) // Including role in response
                    .build();
        } catch (Exception e) {
            // Log and handle exceptions appropriately
            e.printStackTrace();
            throw new RuntimeException("Authentication failed");
        }
    }
    


    private void saveUserToken(User user, String accessToken) {
        var token = Token.builder().user(user).token(accessToken).expired(false).revoked(false).build();
        tokenRepo.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepo.findAllByUser_IdAndExpiredFalseAndRevokedFalse(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepo.saveAll(validUserTokens);
    }

    @Override
    public String createAdmin() {
        Optional<User> userExist = userRepo.findByEmail("admin@gmail.com");
        if (userExist.isPresent()) {
            return "User already exists with email id - admin@gmail.com";
        }

        var user = User.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("123456"))
                .role(Role.ADMIN) 
                .build();
        userRepo.save(user);
        return "Admin registered successfully.";
    }
    
    @Override
    public void updateUser(Long id, UserUpdateRequest userUpdateRequest) throws Exception {
        User user = userRepo.findById(id).orElseThrow(() -> new Exception("User not found"));
        user.setName(userUpdateRequest.getName());
        user.setEmail(userUpdateRequest.getEmail());
        userRepo.save(user);
    }

    @Override
    public void changePassword(ChangePasswordRequest changePasswordRequest) throws Exception {
        // Admin user credentials
        String adminEmail = "admin@gmail.com";
        User user = userRepo.findByEmail(adminEmail);
            // .orElseThrow(() -> new Exception("Admin user not found"));

        if (!passwordEncoder.matches(changePasswordRequest.getOldPassword(), user.getPassword())) {
            throw new Exception("Old password is incorrect");
        }

        if (!changePasswordRequest.getNewPassword().equals(changePasswordRequest.getConfirmPassword())) {
            throw new Exception("Passwords do not match");
        }

        user.setPassword(passwordEncoder.encode(changePasswordRequest.getNewPassword()));
        userRepo.save(user);
    }
}
   