package com.ex.service;

import com.ex.exception.CustomException;
import com.ex.model.Order;
import com.ex.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;

    public List<Order> getAllOrders() {
        List<Order> orders = orderRepo.findAll();
        if (orders.isEmpty()) {
            throw new CustomException("No orders found.");
        }
        return orders;
    }

    public Order createOrder(Order order) {
        if (order.getTotalPrice() == null || order.getTotalPrice() <= 0) {
            throw new CustomException("Order total price must be greater than 0.");
        }
        return orderRepo.save(order);
    }
}
