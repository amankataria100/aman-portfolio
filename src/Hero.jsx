import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "140px 10% 0 10%",  // 👈 THIS FIXES IT
    boxSizing: "border-box",
  }}
>
      <div
        style={{
          maxWidth: "1300px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LEFT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: 1, minWidth: "300px" }}
        >
          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#00f5d4" }}>
              Aman Kataria
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              opacity: 0.8,
              marginBottom: "30px",
            }}
          >
            AI Engineer • Data Scientist • ML Engineer
          </p>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: "14px 28px",
              backgroundColor: "#00f5d4",
              color: "black",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
  flex: 1,
  minWidth: "300px",
  textAlign: "center",
}}
        >
          <img
            src="/images/profile.jpg"
            alt="Aman Kataria"
            style={{
              width: "350px",
              maxWidth: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              border: "3px solid #00f5d4",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}