import { create } from "zustand";
import { fetchAllProducts } from "../api/productApi";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  getProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetchAllProducts();
      set({ products: res.data.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useProductStore;
