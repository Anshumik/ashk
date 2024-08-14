import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            I'm an
            <motion.b whileHover={{color:"orange"}}> IT Student </motion.b>a passionate 
            <motion.b whileHover={{color:"orange"}}> Full-stack Developer </motion.b>, 
            eager to dive into real-world projects. My enthusiasm for 
            <motion.b whileHover={{color:"orange"}}> Coding </motion.b>
            drives me to continuously learn and build innovative web solutions.
            <br></br>
            I am really active and always open for new projects!
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Core Languages</h2>
          <p> C / C++ </p>
          <p>JAVA</p>
          <p>Python</p>
          <p>Javascript</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Languages</h2>
          <p> HTML</p>
          <p> CSS </p>
          <p> ReactJS </p>
          <p> NodeJS </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          <p>My SQL</p>
          <p>SQL</p>
          <p>MongoDB</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
