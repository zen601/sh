import { useState } from "react";
import { menuLinks } from "../data/data";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="text-2xl font-extrabold text-lime-400">
            FitZone
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {menuLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white transition hover:text-lime-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#pricing"
            className="hidden rounded-2xl bg-lime-400 px-6 py-3 font-semibold text-black md:inline-flex"
          >
            Join Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <span className="text-3xl">&times;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;