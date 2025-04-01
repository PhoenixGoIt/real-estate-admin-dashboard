// /app/profile/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/userStore";

const ProfilePage = () => {
  const { logout, setToken } = useUserStore();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Очистка данных пользователя в Zustand
    setToken(null); // Обнуляем токен
    router.push("/auth"); // Перенаправляем на страницу авторизации
  };

  return (
    <div>
      <h1>My Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
