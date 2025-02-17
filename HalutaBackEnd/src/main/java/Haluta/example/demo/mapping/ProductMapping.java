package Haluta.example.demo.mapping;

import Haluta.example.demo.dto.response.productres.ProductRes;
import Haluta.example.demo.entity.Product;

public class ProductMapping {
    public static ProductRes mapProductDBToProductRes(Product productDB) {
        return ProductRes.builder()
                .product_name(productDB.getProduct_name())
                .old_price(productDB.getOld_price())
                .new_price(productDB.getNew_price())
                .comment(productDB.getComment())
                .description(productDB.getDescription())
                .type(productDB.getType())
                .star_rating(productDB.getStar_rating())
                .image(productDB.getImage())
                .quantity(productDB.getQuantity())
                .discount(productDB.getDiscount())
                .build();
    }
}

