package com.ex.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "orders")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long orderId;

    @Column(name = "customer_name")
    @JsonProperty("customerName")
    private String customerName;

    @Column(name = "total_price")
    @JsonProperty("totalPrice")
    private Double totalPrice;

    @Column(name = "status")
    @JsonProperty("status")
    private String orderStatus;

    @Column(name = "order_date")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonProperty("date")
    private Date orderDate;
}