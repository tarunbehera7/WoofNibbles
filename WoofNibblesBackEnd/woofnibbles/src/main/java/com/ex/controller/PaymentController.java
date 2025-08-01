package com.ex.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:1234")
public class PaymentController {

    @Value("${razorpay.key.id}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Object> request) {
        try {
            RazorpayClient razorpay = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

            // Use HashMap instead of JSONObject to avoid conflicts
            Map<String, Object> options = new HashMap<>();
            options.put("amount", request.get("amount"));
            options.put("currency", "INR");
            options.put("receipt", "order_" + System.currentTimeMillis());

            // Convert to JSONObject for Razorpay
            org.json.JSONObject jsonOptions = new org.json.JSONObject(options);
            Order order = razorpay.orders.create(jsonOptions);

            Map<String, Object> response = new HashMap<>();
            response.put("id", order.get("id"));
            response.put("amount", order.get("amount"));
            response.put("currency", order.get("currency"));

            return ResponseEntity.ok(response);
        } catch (RazorpayException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, String> request) {
        try {
            RazorpayClient razorpay = new RazorpayClient(razorpayKeyId, razorpayKeySecret);

            Map<String, Object> options = new HashMap<>();
            options.put("razorpay_order_id", request.get("orderId"));
            options.put("razorpay_payment_id", request.get("paymentId"));
            options.put("razorpay_signature", request.get("signature"));

            // Convert to JSONObject for verification
            org.json.JSONObject jsonOptions = new org.json.JSONObject(options);
            boolean isValidSignature = com.razorpay.Utils.verifyPaymentSignature(jsonOptions, razorpayKeySecret);

            if (isValidSignature) {
                return ResponseEntity.ok(Map.of("status", "success"));
            } else {
                return ResponseEntity.badRequest().body(Map.of("status", "failure"));
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
