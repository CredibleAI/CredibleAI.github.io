import Link from "next/link";
import Logo from "./Logo";
import { NavigationItem } from "@/types";

interface NavbarProps {
  items: NavigationItem[];
  activeItem?: string;
}

export default function Navbar({ items, activeItem }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#a3a3a3] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[120px] py-0">
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Logo className="h-8" />
        </Link>
        <div className="flex items-center">
          {items.map((item, index) => {
            const isActive = activeItem === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex h-20 items-center gap-2 px-5 font-mono text-sm font-normal leading-[1.1] text-[#001f33] uppercase transition-colors hover:bg-gray-50 border-b-[5px] ${
                  isActive ? "border-b-[#001f33]" : "border-b-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

