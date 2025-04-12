"use client";
import Navigate from "@/components/Navigate/Navigate";
import { useUserStore } from "@/lib/store/userStore";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useUserStore();

  if (isLogin === false) {
    return;
  }

  return (
    <section>
      <Navigate>
        <main className='flex-1 overflow-auto p-6 bg-gray-200 rounded-ss-[12px]'>
          {children}
        </main>
      </Navigate>
    </section>
  );
};

export default layout;
