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
          <SheetContent side="right" dir="rtl" className="flex flex-col p-0 overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            {/* Background glow blob */}
            <div className="absolute top-0 right-0 w-56 h-40 bg-primary/5 blur-3xl pointer-events-none rounded-full" />

            {/* Header */}
            <SheetHeader className="relative px-6 pt-7 pb-5 border-b border-border/40">
              <SheetTitle className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center shrink-0">
                  <Dumbbell className="size-5 text-primary" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-black text-lg bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent leading-none">
                    FitForge
                  </span>
                  <span className="text-xs text-muted-foreground font-normal">
                    אימון אישי · תל אביב
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>

            {/* Nav Links */}
            <nav className="flex flex-col px-3 py-4 flex-1 gap-0.5">
              {routeList.map(({ href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-3.5 px-4 rounded-xl font-medium hover:bg-primary/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary/25 group-hover:bg-primary transition-colors duration-200 shrink-0" />
                    <span className="text-sm text-foreground/75 group-hover:text-foreground transition-colors duration-200">
                      {label}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground/30 font-mono tabular-nums group-hover:text-primary/50 transition-colors duration-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="relative px-4 pb-7 pt-4 border-t border-border/40">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <p className="text-center text-xs text-muted-foreground mb-3">
                +300 לקוחות מרוצים · תוצאות אמיתיות
              </p>
              <Button
                asChild
                className="w-full glow-btn"
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact">אימון ניסיון חינם</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
