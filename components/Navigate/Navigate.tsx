import React, { ReactNode } from "react";
import SideBarTop from "./SideBarTop";
import { SideBar } from "./SideBar";

interface NavigateProps {
    children: ReactNode;
  }

export default function Navigate({ children }: NavigateProps) {
  return (
    <section>
      <div className='flex flex-col h-screen'>
        <SideBarTop />
        <div className='flex flex-1 overflow-hidden'>
          <SideBar />
          {children}
        </div>
      </div>
    </section>
  );
}
