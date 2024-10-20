import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Playground from "./components/Main/Playground";
import { motion } from "framer-motion";


const App = () => {
  return (
    <motion.div 
    initial={{opacity:0} }
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:1.5}}
     className=" min-h-screen flex font-product-sans">
      <Sidebar />
      <Playground />
    </motion.div>
  );
};

export default App;
