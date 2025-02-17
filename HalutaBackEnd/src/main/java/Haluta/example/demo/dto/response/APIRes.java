package Haluta.example.demo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class APIRes<T> {
    private Boolean status;
    private String message;
    public List<T> content;
}
