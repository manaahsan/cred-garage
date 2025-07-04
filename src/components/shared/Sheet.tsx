"use client";

// ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// components
import { Nav } from "@/components/shared/Nav";
import {Logout} from "@/components/shared/Logout"

// useContext
import { useAppContext } from "@/context/AppContext";


export const CustomSheet = () => {
  const { isOpenMobile, setIsOpenMobile } = useAppContext();
  return (
    <Sheet open={isOpenMobile} onOpenChange={setIsOpenMobile}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <span className="text-lg font-semibold text-primary">
              Dashboard
            </span>
          </SheetTitle>
          <div>
            <Nav />
            <Logout/>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

 
