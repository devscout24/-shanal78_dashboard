import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between py-8 lg:max-w-7xl">
        <Link to="/" className="text-xl font-bold">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[69.023px] w-[170.258px]"
          />
        </Link>
        <ul className="flex items-center gap-7 font-mono">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[15px] leading-[22.5px] font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="space-x-4">
          <Link to="/auth/login">
            <Button
              variant="link"
              className="text-primary h-11 cursor-pointer rounded-full bg-linear-to-r px-6 py-2.5 font-mono text-[15px] leading-[22.5px] font-semibold"
            >
              Login
            </Button>
          </Link>

          <Link to="/auth/register">
            <Button className="from-primary to-secondary h-11 cursor-pointer rounded-full bg-linear-to-r px-6 py-2.5 font-mono text-[15px] leading-[22.5px] font-semibold text-white shadow-xl">
              <span>Get Started</span> <MoveRight />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

const navLinks = [
  { name: "Features", href: "/" },
  { name: "How it Works", href: "/about" },
  { name: "Use Cases", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];
