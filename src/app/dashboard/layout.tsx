"use client"

// components
import { Header } from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/Sidebar";
import { PageTransition } from "@/components/shared/PageTransition";

// useContext
import { useAppContext } from "@/context/AppContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen } = useAppContext();

  return (
    <div className="flex h-screen bg-background transition-colors duration-300">
      <Sidebar />
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          isOpen ? "md:ml-0" : "md:ml-0"
        }`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto p-4  bg-[#EAF6F6] md:p-6">{children}</main>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutContent>
      <PageTransition>{children}</PageTransition>
    </LayoutContent>
  );
}
