'use client'
import { useLogout } from '@/lib/api/auth/auth-quary'
import React from 'react'

const page = () => {
  const handleLogout = useLogout();
  return (
    <div>
      <h1>my profile</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default page