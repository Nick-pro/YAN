import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-2xl border-b border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3 group relative">
            {/* Logo box */}
            <div className="w-11 h-11 rounded-2xl overflow-hidden relative border border-cyan-400/30 shadow-md bg-gradient-to-br from-white/10 to-cyan-500/10 backdrop-blur-md">
              <img
                src="/yan.jpg"
                alt="Yantrika Logo"
                className="w-full h-full object-cover p-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-500 pointer-events-none" />
            </div>

            {/* Brand Name */}
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent select-none">
              YANTRIKA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 backdrop-blur-xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-cyan-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl"></div>
            {isOpen ? (
              <X className="w-6 h-6 text-cyan-400 relative z-10" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400 relative z-10" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-80 bg-black/80 backdrop-blur-2xl border-l border-cyan-400/20 md:hidden"
          >
            <div className="flex flex-col p-8 pt-28 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 px-6 rounded-xl transition-all duration-300 text-lg font-semibold ${
                      isActive(item.path)
                        ? "text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30"
                        : "text-white hover:text-cyan-300 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
