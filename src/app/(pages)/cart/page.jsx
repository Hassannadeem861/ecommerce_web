"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { getCart, updateQuantity, removeFromCart, getCartTotal } from "@/app/utils/helper";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const refreshCart = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    refreshCart();
    window.addEventListener("cartUpdated", refreshCart);
    return () => window.removeEventListener("cartUpdated", refreshCart);
  }, []);

  const handleQtyChange = (item, delta) => {
    updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + delta);
  };

  const handleRemove = (item) => {
    removeFromCart(item.id, item.selectedColor, item.selectedSize);
    toast.success("Item removed from cart");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3 className="fw-bold mb-3">Your cart is empty</h3>
        <Link href="/" className="btn btn-dark rounded-pill px-4">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4 py-md-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>

      <div className="row g-4">
        {/* Items list */}
        <div className="col-12 col-lg-8">
          {cartItems.map((item, i) => (
            <div
              key={i}
              className="d-flex gap-3 p-3 mb-3 border rounded-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                style={{ objectFit: "contain", borderRadius: 10, background: "#f5f5f5" }}
              />

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bold mb-1">{item.title}</h5>
                  <button
                    className="btn-close"
                    onClick={() => handleRemove(item)}
                  ></button>
                </div>

                <div className="text-muted mb-2" style={{ fontSize: 14 }}>
                  Size: {item.selectedSize} &nbsp;|&nbsp; Color:{" "}
                  <span
                    style={{
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: item.selectedColor,
                      verticalAlign: "middle",
                    }}
                  ></span>
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <div className="d-flex align-items-center gap-3 border rounded-pill px-3 py-1">
                    <button
                      className="border-0 bg-transparent fs-5"
                      onClick={() => handleQtyChange(item, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="border-0 bg-transparent fs-5"
                      onClick={() => handleQtyChange(item, 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="fw-bold fs-5">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="col-12 col-lg-4">
          <div className="border rounded-4 p-4">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${getCartTotal()}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Total</span>
              <span>${getCartTotal()}</span>
            </div>
            <button className="btn btn-dark w-100 rounded-pill py-2">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;