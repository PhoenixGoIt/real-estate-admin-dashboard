// /app/profile/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/userStore";

const MyProfile = () => {
  const { logout } = useUserStore();
  const router = useRouter();

  const handleLogout = () => {
    logout(); 
    router.push('/auth')  
  };

  return (
    <div>
      <h1 className="text-black font-[700] text-3xl mb-6">My Profile</h1>
      <div>

      <button onClick={handleLogout}>Logout</button>
      </div>
      
    </div>
  );
};

export default MyProfile;
