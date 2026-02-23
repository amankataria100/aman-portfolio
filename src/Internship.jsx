import { motion } from "framer-motion";

export default function Internship() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: "40px" }}
      >
        Internship Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>
          Data Analyst Intern — Saanvi Fasteners Pvt. Ltd.
        </h3>

        <p>
          During my internship, I worked extensively with large operational
          datasets to optimize inventory management and streamline business
          processes. By applying SQL-based data extraction, advanced Excel
          analytics, and Power BI visualizations, I helped reduce inventory
          carrying costs by 15% and improved order processing efficiency by 25%.
        </p>

        <p style={{ marginTop: "20px" }}>
          I conducted market research, customer segmentation analysis, and
          performance reporting to support strategic decision-making. My work
          involved transforming raw transactional data into actionable insights,
          designing interactive dashboards, and identifying operational
          bottlenecks to enhance overall productivity.
        </p>

        <p style={{ marginTop: "20px" }}>
          This experience strengthened my ability to bridge the gap between
          technical analytics and business impact, ensuring that data-driven
          solutions aligned directly with organizational goals.
        </p>
      </motion.div>
    </section>
  );
}