package com.ams.technicalTest.component.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetail {
    private String id;
    private String name;
    private double price;
    private boolean availability;
}

