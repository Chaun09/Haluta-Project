package Haluta.example.demo.dto.auth;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.*;
import lombok.*;



@Data
public class UserDto {

    @JsonIgnore
    private Long id;
    @NotBlank(message = "Email or phone number is required")
    private String username;
}
