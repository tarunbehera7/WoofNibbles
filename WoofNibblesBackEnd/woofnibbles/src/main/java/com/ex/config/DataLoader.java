package com.ex.config;

import com.ex.model.Product;
import com.ex.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataLoader {
    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository) {
        return args -> {
            if (productRepository.count() == 0) { // Load only if empty
                productRepository.saveAll(List.of(
                    new Product(null, "Premium Dry Dog Food", 1499.0, "High-quality dry food for adult dogs.", "dog_food.jpeg"),
                    new Product(null, "Grain-Free Puppy Food", 1299.0, "Specially formulated for puppies with sensitive stomachs.", "puppy_food.jpeg"),
                    new Product(null, "Organic Dog Treats", 599.0, "Healthy organic treats made with natural ingredients.", "dog_treats.jpeg"),
                    new Product(null, "Soft Chew Dog Treats", 699.0, "Soft and delicious treats for dogs of all ages.", "chew_treats.jpeg"),
                    new Product(null, "Natural Dental Chews", 899.0, "Helps reduce plaque and tartar for better dental health.", "dental_chews.jpeg"),
                    new Product(null, "Adjustable Dog Harness", 1199.0, "Comfortable and durable harness for walking your dog safely.", "dog_harness.jpeg"),
                    new Product(null, "Portable Dog Water Bottle", 499.0, "Easy-to-carry water bottle for dogs on the go.", "dog_bottle.jpeg"),
                    new Product(null, "Durable Chew Toys", 599.0, "Long-lasting chew toys for all dog breeds.", "chew_toys.jpeg"),
                    new Product(null, "Hypoallergenic Dog Food", 1799.0, "Ideal for dogs with food sensitivities and allergies.", "hypoallergenic_food.jpeg"),
                    new Product(null, "Eco-Friendly Poop Bags", 349.0, "Biodegradable poop bags for easy and eco-friendly disposal.", "poop_bags.jpeg")
                ));
            }
        };
    }
}
