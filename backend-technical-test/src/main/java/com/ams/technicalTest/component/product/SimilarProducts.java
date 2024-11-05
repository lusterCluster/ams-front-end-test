package com.ams.technicalTest.component.product;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Component
public class SimilarProducts {
    private List<ProductDetail> similarProducts;
}

