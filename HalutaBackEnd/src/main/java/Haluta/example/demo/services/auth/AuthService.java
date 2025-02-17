package Haluta.example.demo.services.auth;

import Haluta.example.demo.dto.auth.LoginRequest;
import Haluta.example.demo.dto.auth.SignUpRequest;
import Haluta.example.demo.dto.auth.UserDto;
import Haluta.example.demo.entity.Customer;


public interface AuthService  {
    Customer createCustomer(SignUpRequest signUpRequest);
    UserDto loginCustomer(LoginRequest loginRequest);
}
