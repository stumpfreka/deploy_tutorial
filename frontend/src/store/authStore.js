import { create } from "zustand";
import { api } from "../lib/api.js";

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,

  init: async () => {
    try {
      const res = await api.me();
      set({ user: res.user, loading: false });
    } catch (error) {
      //401 nincs bejelentkezve
      set({ user: null, loading: false });
    }
  },
  login: async (credentials) => {
    const res = await api.login(credentials);
    set({ user: res.user });
  },
  logout: async () => {
    await api.logout();
    set({ user: null });
  },
  register: async (data) => {
    await api.register(data);
  },
}));
