"use client"
import { SideBar } from "@/components/SideBar"
import SideBarTop from "@/components/SideBarTop"
import { useUserStore } from "@/lib/store/userStore"

const layout = ({children} : {children: React.ReactNode}) => {
  const {isLogin} = useUserStore()
  
  if(isLogin === false) {
    return
  }

    return (
        <div className="flex flex-col h-screen">
            <SideBarTop />
          <div className="flex flex-1 overflow-hidden">
            <SideBar />
          <main className="flex-1 overflow-auto p-6 bg-gray-200 rounded-ss-[12px]">
            {children}
          </main>
          </div>
        </div>
  )
}

export default layout

