import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollText, Crown, Users, Network, Crosshair, FileText, Heart } from "lucide-react";

export function Navbar() {
  const links = [
    { href: "/", label: "Home", icon: Crown },
    { href: "/quiz", label: "Quiz", icon: Crosshair },
    { href: "/akbar", label: "Akbar", icon: Users },
    { href: "/aurangzeb", label: "Aurangzeb", icon: Network },
    { href: "/compare", label: "Compare", icon: ScrollText },
    { href: "/activity", label: "Activity", icon: FileText },
    { href: "/papers", label: "Papers", icon: ScrollText },
    { href: "/thanks", label: "Thanks", icon: Heart },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Crown className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Mughal Empire
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}