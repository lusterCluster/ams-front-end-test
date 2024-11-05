package com.ams.technicalTest.service.product;

import com.ams.technicalTest.component.product.ProductDetail;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

    private final RestTemplate restTemplate;

    // URLs base de los endpoints externos
    private static final String SIMILAR_IDS_URL = "http://localhost:3001/product/{productId}/similarids";
    private static final String PRODUCT_DETAIL_URL = "http://localhost:3001/product/{productId}";

    public ProductServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public List<ProductDetail> getSimilarProducts(String productId) {
        // Obtener los IDs de productos similares
        String[] similarIds;
        try {
            similarIds = restTemplate.getForObject(SIMILAR_IDS_URL, String[].class, productId);
        } catch (HttpClientErrorException.NotFound e) {
            // Si no se encuentra el producto, devolvemos una lista vacía
            return new ArrayList<>();
        } catch (Exception e) {
            throw new RuntimeException("Error al obtener los IDs de productos similares", e);
        }

        // Obtener el detalle de cada producto similar
        List<ProductDetail> similarProducts = new ArrayList<>();
        for (String id : similarIds) {
            try {
                ProductDetail productDetail = restTemplate.getForObject(PRODUCT_DETAIL_URL, ProductDetail.class, id);
                if (productDetail != null) {
                    similarProducts.add(productDetail);
                }
            } catch (HttpClientErrorException.NotFound e) {
                // Si un producto similar no se encuentra, lo ignoramos
            } catch (Exception e) {
                throw new RuntimeException("Error al obtener el detalle del producto con ID " + id, e);
            }
        }

        return similarProducts;
    }
}

