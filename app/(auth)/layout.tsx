import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; // возвращает только содержимое без общего макета
  }
