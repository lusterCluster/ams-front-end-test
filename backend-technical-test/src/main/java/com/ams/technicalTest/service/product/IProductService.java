package com.ams.technicalTest.service.product;

import com.ams.technicalTest.component.product.ProductDetail;

import java.util.List;

public interface IProductService {
    List<ProductDetail> getSimilarProducts(String productId);
}
