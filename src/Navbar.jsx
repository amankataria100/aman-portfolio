import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      {/* Logo (appears after scroll only) */}
      <motion.div
        animate={{ opacity: showLogo ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="logo"
      >
        A
      </motion.div>

      {/* Links (only on first screen) */}
      {!showLogo && (
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </motion.nav>
  );
}