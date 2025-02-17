package Haluta.example.demo.controller;

import Haluta.example.demo.dto.response.productres.ProductRes;
import Haluta.example.demo.services.product.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/{api_prefix}/public")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/product/get-all")
    public ResponseEntity<?> getProducts() {
       return ResponseEntity.ok(productService.getAllProducts());
    }

}
