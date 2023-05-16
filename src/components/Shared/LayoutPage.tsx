"use client";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

type Props = {
  children: React.ReactNode;
  sidebar?: boolean;
};

export function LayoutPage({ children, sidebar = true }: Props) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      {sidebar && <SideBar />}
      <div className={`${sidebar && "pl-[23%]"}`}>{children}</div>
    </div>
  );
}
