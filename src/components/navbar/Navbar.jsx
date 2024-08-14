import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         Anshumi Kaneria
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/anshumi-kaneria-443689230/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Anshumik">
            <img src="/github.png" alt="" />
          </a>
          <a href="mailto:anshumikaneria@gmail.com?body=My custom mail body">
            <img src="/gmail.png" alt="" />
          </a>
          <a href="https://dribbble.com/anshumi_k">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
