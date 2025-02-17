package Haluta.example.demo.services.product;


import Haluta.example.demo.dto.response.APIRes;
import Haluta.example.demo.dto.response.productres.ProductRes;
import java.util.*;

public interface ProductService {
    APIRes<ProductRes>  getAllProducts();
}
