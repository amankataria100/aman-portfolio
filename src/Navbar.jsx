import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide links after first screen
      if (window.scrollY > window.innerHeight - 100) {
        setShowLinks(false);
      } else {
        setShowLinks(true);
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
        left: 0,
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        background: "rgba(15,23,42,0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 9999,
      }}
    >
      {/* LOGO ALWAYS VISIBLE */}
      <div
        style={{
          fontFamily: "Cinzel Decorative, serif",
          fontSize: "22px",
          letterSpacing: "2px",
          color: "white",
        }}
      >
        Aman Kataria
      </div>

      {/* LINKS ONLY ON HERO */}
      {showLinks && (
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      )}
    </motion.nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};