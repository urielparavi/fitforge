"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleTheme } from "@/components/layout/toggle-theme";
import { Dumbbell, Menu } from "lucide-react";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#benefits", label: "אודות" },
  { href: "#services", label: "שירותים" },
  { href: "#pricing", label: "מחירים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#contact", label: "צור קשר" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 fixed left-1/2 -translate-x-1/2 border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card/80 backdrop-blur-md">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Dumbbell className="w-9 h-9 text-primary animate-[float_6s_ease-in-out_infinite]" />
        <span className="font-black text-xl bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
          FitForge
        </span>
      </Link>

      {/* Desktop Nav */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList className="gap-1">
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink asChild>
                <a
                  href={href}
                  className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary"
                >
                  {label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />
        <Button asChild size="sm" className="glow-btn">
          <a href="#contact">אימון ניסיון חינם</a>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="flex lg:hidden items-center gap-2">
        <ToggleTheme />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="תפריט">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-4">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 justify-end">
                <span className="font-black text-xl bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
                  FitForge
                </span>
                <Dumbbell className="size-7 text-primary" />
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 mt-4">
              {routeList.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-end py-3 px-2 rounded-md text-sm font-medium hover:bg-accent hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>

            <Separator />

            <SheetFooter className="mt-auto">
              <Button
                asChild
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact">אימון ניסיון חינם</a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
