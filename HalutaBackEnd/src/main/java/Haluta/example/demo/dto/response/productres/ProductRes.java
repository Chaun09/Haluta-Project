package Haluta.example.demo.dto.response.productres;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRes {
    private String product_name;
    private float old_price;
    private float new_price;
    private int quantity;
    private String description;
    private String image;
    private String type;
    private String comment;
    private int star_rating;
    private Integer discount;
}
