import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 10%",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: "40px" }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.7",
          fontSize: "18px",
          opacity: 0.8,
        }}
      >
        I’m always open to discussing AI projects, collaboration opportunities,
        internships, or full-time roles. Feel free to reach out.
      </motion.p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        <a
          href="https://github.com/amankataria100"
          target="_blank"
          style={buttonStyle}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aman-kataria-7a8405257/"
          target="_blank"
          style={buttonStyle}
        >
          LinkedIn
        </a>

        <a
          href="mailto:amankataria1647@gmail.com"
          style={buttonStyle}
        >
          Email Me
        </a>
      </div>

      {/* Copyright */}
      <p
        style={{
          opacity: 0.5,
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Aman Kataria. All rights reserved.
      </p>
    </section>
  );
}

const buttonStyle = {
  padding: "14px 28px",
  background: "#00f5d4",
  color: "black",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};