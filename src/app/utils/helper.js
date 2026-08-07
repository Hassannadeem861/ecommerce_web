// app/utils/cart.js

const CART_KEY = "shop_cart";

// Cart update hone par baaki components ko batao
const notifyCartUpdated = () => {
  window.dispatchEvent(new Event("cartUpdated"));
};

export const getCart = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Cart read error:", error);
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  
  notifyCartUpdated(); // ✅ har save ke baad event fire karo
};

export const addToCart = (item) => {
    console.log("item: ",item)
  const cart = getCart();

  const existingIndex = cart.findIndex(
    (c) =>
      c.id === item.id &&
      c.selectedColor === item.selectedColor &&
      c.selectedSize === item.selectedSize
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
  return cart;
};

// ✅ Naya function: quantity edit karne ke liye
export const updateQuantity = (id, selectedColor, selectedSize, newQuantity) => {
  let cart = getCart();

  if (newQuantity < 1) {
    // 0 ya negative ho to item hi remove kar do
    cart = cart.filter(
      (c) => !(c.id === id && c.selectedColor === selectedColor && c.selectedSize === selectedSize)
    );
  } else {
    cart = cart.map((c) =>
      c.id === id && c.selectedColor === selectedColor && c.selectedSize === selectedSize
        ? { ...c, quantity: newQuantity }
        : c
    );
  }

  saveCart(cart);
  return cart;
};

export const removeFromCart = (id, selectedColor, selectedSize) => {
  const cart = getCart().filter(
    (c) => !(c.id === id && c.selectedColor === selectedColor && c.selectedSize === selectedSize)
  );
  saveCart(cart);
  return cart;
};

export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};