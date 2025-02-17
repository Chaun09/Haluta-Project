package Haluta.example.demo.services.product;

import Haluta.example.demo.dto.response.APIRes;
import Haluta.example.demo.dto.response.productres.ProductRes;
import Haluta.example.demo.entity.Product;
import Haluta.example.demo.mapping.ProductMapping;
import Haluta.example.demo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ProductImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public APIRes<ProductRes> getAllProducts (){
        List<Product> products = productRepository.findAll();
        List<ProductRes> productResList = products.stream().map(ProductMapping::mapProductDBToProductRes).toList();
        return new APIRes<>(true,"Ds sản phẩm",productResList);
    }
}
