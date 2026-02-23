import { motion } from "framer-motion";

const projects = [
  {
    title: "Federated Learning Healthcare Platform",
    image: "/images/federated.jpg",
    link: "https://github.com/amankataria100/End-to-End-Federated-Learning-Healthcare-Platform",
  },
  {
    title: "LegalVoice.ai",
    image: "/images/legalvoice.jpg",
    link: "https://github.com/amankataria100/LegalVoice.ai",
  },
  {
    title: "Credit Card Fraud Detection",
    image: "/images/fraud.jpg",
    link: "https://github.com/amankataria100/Credit-Card-Fraud-Detection",
  },
  {
    title: "Adidas Sales Analysis",
    image: "/images/adidas.jpg",
    link: "https://github.com/amankataria100/Adidas-Sales-Analysis",
  },
  {
    title: "Heart Disease Data Visualization",
    image: "/images/heart.jpg",
    link: "https://github.com/amankataria100/Data-Visualization-on-Heart-Disease-Dataset",
  },
  {
    title: "Black Friday Sales Analytics",
    image: "/images/blackfriday.jpg",
    link: "https://github.com/amankataria100/Black-Friday-Sales-Data-Analytics",
  },
  {
    title: "Binance Futures Trading Bot",
    image: "/images/binance.jpg",
    link: "https://github.com/amankataria100/Binance-futures-trading-bot",
  },
  {
    title: "Machine Readable Document System",
    image: "/images/document.jpg",
    link: "https://github.com/amankataria100/Empowering-Machine-Readable-Document-Management-System",
  },
  {
    title: "Fake Currency Checker",
    image: "/images/fakecurrency.jpg",
    link: "https://github.com/amankataria100/Fake_currency_checker",
  },
  {
    title: "LLM_NEO",
    image: "/images/llmneo.jpg",
    link: "https://github.com/amankataria100/LLM_NEO",
  },
  {
    title: "HaveAMeal",
    image: "/images/haveameal.jpg",
    link: "https://github.com/amankataria100/HaveAMeal",
  },
  {
    title: "AnAmplify",
    image: "/images/anamplify.jpg",
    link: "https://github.com/amankataria100/AnAmplify",
  },
];

export default function Projects() {
  return (
    <section id="projects"
      style={{
        padding: "120px 10%",
        maxWidth: "1300px",
        margin: "auto",textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ fontSize: "36px", marginBottom: "60px" }}
      >
        Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
        }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textDecoration: "none",
              color: "white",
              background: "#1e293b",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              display: "block",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3 style={{ color: "#00f5d4" }}>
                {project.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}