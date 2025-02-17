package Haluta.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private Long product_id;
    @Column(unique=true)
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
