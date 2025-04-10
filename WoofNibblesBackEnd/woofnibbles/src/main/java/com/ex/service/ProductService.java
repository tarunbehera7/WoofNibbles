package com.ex.service;

import com.ex.exception.CustomException;
import com.ex.model.Product;
import com.ex.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        if (products.isEmpty()) {
            throw new CustomException("No products found.");
        }
        return products;
    }

    public Product createProduct(Product product) {
        if (product.getPrice() == null || product.getPrice() <= 0) {
            throw new CustomException("Product price must be greater than zero.");
        }
        return productRepository.save(product);
    }
}
