import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "React", level: 80 },
  { name: "SQL", level: 88 },
  { name: "Generative AI / RAG", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ textAlign: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ fontSize: "36px", marginBottom: "40px" }}
      >
        Skills
      </motion.h2>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <p style={{ marginBottom: "8px" }}>{skill.name}</p>

          <div
            style={{
              height: "10px",
              background: "#1e293b",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{
                height: "100%",
                background: "#00f5d4",
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}