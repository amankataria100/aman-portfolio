import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [showLinks, setShowLinks] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setShowLogo(true);
        setShowLinks(false);
      } else {
        setShowLogo(false);
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
  height: "80px",   // restore desktop height
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",  // restore desktop padding
  background: "rgba(15,23,42,0.95)",
  backdropFilter: "blur(10px)",
  zIndex: 9999,
}}
    >
      {/* LOGO (only after scroll) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: showLogo ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: "Cinzel Decorative, serif",
          fontSize: "28px",
          letterSpacing: "3px",
          color: "white",
        }}
      >
Aman
      </motion.div>

      {/* LINKS (only on first screen) */}
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