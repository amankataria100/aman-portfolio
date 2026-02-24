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
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        background: "rgba(15,23,42,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <div
        style={{
          fontFamily: "Cinzel Decorative, serif",
          fontSize: "28px",
          letterSpacing: "3px",
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? "translateX(0)" : "translateX(-20px)",
          transition: "all 0.4s ease",
        }}
      >
        Aman Kataria
      </div>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
          Skills
        </a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
          Projects
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </motion.nav>
  );
}