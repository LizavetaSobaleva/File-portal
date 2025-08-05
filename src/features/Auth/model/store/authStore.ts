import { instance } from "@shared/api/instance";
import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: !!localStorage.getItem("token"),

  login: async (email, password) => {
    const { data } = await instance.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    set({ isAuth: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ isAuth: false });
  },
}));
