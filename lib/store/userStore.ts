//userStore.ts
"use client";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserState } from "../@type";

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isLogin: false,
        token: null,
        error: null,
        setUser: (user) => set({ user, isLogin: true }),
        logout: () => {
          set({ user: null, isLogin: false, token: null, error: null });
        },
        setToken: (token) => {
          set({ token });
        },
        setError: (error) => {
          set({ error });
        },
      }),
      {
        name: "user-store", // имя для сохранения состояния в localStorage
      },
    ),
    { name: "UserStore" }, // имя для DevTools
  ),
);
