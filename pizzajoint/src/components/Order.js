import React from 'react';
import { motion } from 'framer-motion';

const Order = ({ pizza }) => {
  const orderVariant = {
    hidden: {
      x: "100vw",
      opacity:0 
    }, 
    show: { 
      x: 0,
      opacity:1,
      transition: {
        type: "spring",
        mass: 1,
        damping: 10,
        when: "beforeChildren",
        staggerChildren:1.5
  
      }
    }
  }
  const headingVariant = {
    hidden:{
      opacity: 0,
     
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring"
        
      }
      
    }

  }
  
  return (
    <motion.div className="container order"
      variants={orderVariant}
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
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={headingVariant}
      >You ordered a {pizza.base} pizza with:</motion.p>

      <motion.div
        variants={headingVariant}
       
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;