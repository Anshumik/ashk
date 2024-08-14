import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "The DigiCSR",
    desc: "The DigiCSR project aims to create a user-friendly platform for collaboration between companies, NGOs, and beneficiaries, facilitating CSR funding, proposal management, and impact evaluation.The platform promotes transparency, credibility, and effectiveness in CSR efforts, empowering small NGOs with access to funds and resources.",
  },
  {
    id: 2,
    title: "StockPile",
    desc: "Engineered a Dart-based inventory management app using Flutter, integrating account login and banking features.Incorporated Flutter charts library and Monthly Profit and Loss Analysis, enhancing financial insights for small-scale businesses by 40%",
  },
  {
    id: 3,
    title: "Grilli",
    desc: "Designed a user-friendly restaurant website with a focus on seamless navigation and intuitive interfaces. Implemented responsive design principles using HTML, CSS, and JavaScript for optimal viewing on all devices.Integrated features like easy menu browsing, online reservation systems, and event promotion modules to elevate user experience and foster customer engagement.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
