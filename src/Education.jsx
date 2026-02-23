import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: "50px" }}
      >
        Education
      </motion.h2>

      {/* B.Tech */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ marginBottom: "40px" }}
      >
        <h3>B.Tech in Computer Science Engineering</h3>
        <p>Rajiv Gandhi Institute of Petroleum Technology</p>
        <p>2022 – 2026</p>
      </motion.div>

      {/* Senior Secondary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: "40px" }}
      >
        <h3>Senior Secondary (CBSE)</h3>
        <p>Pioneer Convent Sr. Sec. School</p>
        <p>2022</p>
      </motion.div>

      {/* Secondary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Secondary (CBSE)</h3>
        <p>Divine Happy Sr. Sec. School</p>
        <p>2020</p>
      </motion.div>
    </section>
  );
}