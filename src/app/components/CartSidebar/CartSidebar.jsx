"use client";
import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {  updateQuantity, removeFromCart, getCartTotal } from "@/app/utils/helper";

const CartSidebar = ({ show, onClose, cartItems, refreshCart }) => {
  const handleQtyChange = (item, delta) => {
    const newQty = item.quantity + delta;
    updateQuantity(item.id, item.selectedColor, item.selectedSize, newQty);
    refreshCart();
  };

  const handleRemove = (item) => {
    removeFromCart(item.id, item.selectedColor, item.selectedSize);
    toast.success("Item removed");
    refreshCart();
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 1040,
        }}
      ></div>

      {/* Sidebar panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "min(400px, 100vw)",
          background: "#fff",
          zIndex: 1050,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="m-0 fw-bold">Your Cart ({cartItems.length})</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        {/* Items list */}
        <div className="flex-grow-1 overflow-auto p-3">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted mt-5">Your cart is empty</p>
          ) : (
            cartItems.map((item, i) => (
              <div
                key={i}
                className="d-flex gap-2 mb-3 pb-3 border-bottom"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                  style={{ objectFit: "contain", borderRadius: 8, background: "#f5f5f5" }}
                />

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <span className="fw-semibold" style={{ fontSize: 14 }}>
                      {item.title}
                    </span>
                    <button
                      className="btn-close"
                      style={{ fontSize: 10 }}
                      onClick={() => handleRemove(item)}
                    ></button>
                  </div>

                  <div style={{ fontSize: 12, color: "#888" }}>
                    Size: {item.selectedSize} &nbsp;|&nbsp; Color:{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: item.selectedColor,
                        verticalAlign: "middle",
                      }}
                    ></span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="d-flex align-items-center gap-2 border rounded-pill px-2">
                      <button
                        className="border-0 bg-transparent"
                        onClick={() => handleQtyChange(item, -1)}
                      >
                        −
                      </button>
                      <span style={{ fontSize: 13 }}>{item.quantity}</span>
                      <button
                        className="border-0 bg-transparent"
                        onClick={() => handleQtyChange(item, 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="fw-bold" style={{ fontSize: 14 }}>
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer: total + checkout */}
        {cartItems.length > 0 && (
          <div className="p-3 border-top">
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Subtotal</span>
              <span className="fw-bold">${getCartTotal()}</span>
            </div>
            <button className="btn btn-dark w-100 rounded-pill py-2">
              Go to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;