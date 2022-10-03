import React from 'react';
import { Link } from 'react-router-dom';
import { motion} from "framer-motion"
const Home = () => {
  const homeVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition:{
      
      }}
  }

  const buttonVariant = {
    state: {
      transition: {
        delay: 2
      }
      
   },
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity
      }
  }
  }

  return (
    <motion.div className="home container"
      variants={homeVariants}
      initial="hidden"
      animate="show"
      exit={{
        x: "-100vw",
        transition:{
          duration: 0.5,
          ease:"easeIn"
          
        }
        }}
      
    
    >
    
     <motion.h2>
         Welcome to Pizza Joint
       </motion.h2>
    
      <Link to="/base">
        <motion.button
           variants={buttonVariant}
           animate="state"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;