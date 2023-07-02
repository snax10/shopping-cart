import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  loading: true,
  cartItems: [],
  isCartActive: false,
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),
  setCartItems: (cartItems) => set({ cartItems }),
  setIsCartActive: (isCartActive) => set({ isCartActive }),
}));
