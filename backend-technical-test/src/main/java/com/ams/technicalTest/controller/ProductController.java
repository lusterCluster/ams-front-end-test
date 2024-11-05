package com.ams.technicalTest.controller;

import com.ams.technicalTest.component.product.ProductDetail;
import com.ams.technicalTest.service.product.IProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final IProductService productService;

    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{productId}/similar")
    public ResponseEntity<List<ProductDetail>> getSimilarProducts(@PathVariable String productId) {
        List<ProductDetail> similarProducts = productService.getSimilarProducts(productId);

        // Si no hay productos similares, devolver 404
        if (similarProducts.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(similarProducts);
    }
}
