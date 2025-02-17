package Haluta.example.demo.dto.auth;

import jakarta.validation.constraints.*;
import lombok.*;

@Setter
@Getter
public class LoginRequest extends UserDto{
    @NotBlank(message = "Password is required")
    private String password;
}
