"use client";
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { UserState } from '../@type';

// Функция для безопасного доступа к localStorage только на клиенте
const getTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('jwtToken');
  }
  return null;
};

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isLogin: false,
        token: getTokenFromLocalStorage(),
        setUser: (user) => set({ user, isLogin: true }),
        logout: () => {
          set({ user: null, isLogin: false, token: null })
        },
        setToken: (token) => {
          set({ token });
        },
      }),
      {
        name: 'user-store', // имя для сохранения состояния в localStorage
      }
    ),
    { name: 'UserStore' } // имя для DevTools
  )
);


