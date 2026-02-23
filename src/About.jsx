import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section" style={{ textAlign: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: "40px" }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        I’m Aman Kataria, a Computer Science Engineering undergraduate
        passionate about Artificial Intelligence, Machine Learning, and
        data-driven problem solving. I specialize in building scalable AI
        systems including Federated Learning architectures, Generative AI
        pipelines, Retrieval-Augmented Generation (RAG) systems, and
        production-ready machine learning solutions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "20px auto 0",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        My work combines technical depth with real-world impact — from
        designing AI-powered healthcare platforms to building fraud detection
        systems and business intelligence dashboards. I enjoy solving complex
        problems, optimizing performance, and transforming raw data into
        meaningful insights that drive smarter decisions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          margin: "20px auto 0",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        Beyond technical development, I focus on clean architecture,
        maintainability, and scalable deployment. My goal is to contribute to
        impactful AI systems that are efficient, ethical, and production-ready.
      </motion.p>
    </section>
  );
}