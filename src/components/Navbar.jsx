import { useEffect, useState } from "react";
import { Search, Menu, X, Phone } from "lucide-react";
import { BUSINESS_CONFIG, PHONE_NUMBER } from "../data/config";
import { generalWhatsAppLink, telLink } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Dry Fruits", href: "#dry-fruits" },
  { label: "Masalas", href: "#masalas" },
  { label: "Regional Specials", href: "#regional-specials" },
  { label: "Our Story", href: "#our-story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 bg-ivory-soft border-b border-ink/10 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
      style={{ backgroundColor: "#FAF4E8" }}
    >
      <nav
        className="max-w-content mx-auto container-px flex items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-xl sm:text-2xl text-forest tracking-tight"
        >
          {BUSINESS_CONFIG.brandName}
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-ink-soft">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-burgundy transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onSearchOpen}
            aria-label="Search products"
            className="p-2 rounded-full hover:bg-ink/5 transition-colors"
          >
            <Search className="w-5 h-5 text-ink" strokeWidth={1.75} />
          </button>

          <a
            href={telLink(PHONE_NUMBER)}
            aria-label="Call us"
            className="hidden sm:flex p-2 rounded-full hover:bg-ink/5 transition-colors"
          >
            <Phone className="w-5 h-5 text-ink" strokeWidth={1.75} />
          </a>

          <a
            href={generalWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-ivory-soft px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>

          <a
            href={generalWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="sm:hidden p-2 rounded-full bg-forest text-ivory-soft"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-full hover:bg-ink/5 transition-colors"
          >
            <Menu className="w-6 h-6 text-ink" strokeWidth={1.75} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-ink/50"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ivory-soft shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#FAF4E8" }}
        >
          <div className="flex items-center justify-between p-5 border-b border-ink/10">
            <span className="font-display text-lg text-forest">
              {BUSINESS_CONFIG.brandName}
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-full hover:bg-ink/5"
            >
              <X className="w-6 h-6 text-ink" />
            </button>
          </div>
          <ul className="flex flex-col p-5 gap-1 font-body text-lg text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 border-b border-ink/5 hover:text-burgundy transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-5 flex flex-col gap-3">
            <a
              href={generalWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-forest text-ivory-soft py-3 rounded-full font-medium"
            >
              <WhatsAppIcon className="w-4 h-4" /> Order on WhatsApp
            </a>
            <a
              href={telLink(PHONE_NUMBER)}
              className="flex items-center justify-center gap-2 border border-ink/20 text-ink py-3 rounded-full font-medium"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
