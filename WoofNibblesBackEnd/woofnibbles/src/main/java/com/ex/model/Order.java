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
    
    @Column(name = "address")
    @JsonProperty("address")
    private String address;

    @Column(name = "order_date")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonProperty("date")
    private Date orderDate;

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getOrderStatus() {
		return orderStatus;
	}
	
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public String getAddress() {
	        return address;
	}
	
	public void setAddress(String address) {
	      this.address = address;
	}
	
	public Date getOrderDate() {
		return orderDate;
	}
	

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
}