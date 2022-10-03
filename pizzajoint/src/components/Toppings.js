import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  const motionVariant = {
    initialState: {
        x: "100vw"
    },
    finalState: {
      x: 0,
      transition:{
        delay: 0.5,
        duration: 0.3,
        type: "tween",
      }
    }
  }
  const ButtonAnimate = {
    buttonHover: {
      scale: 1.4,
        transition:{
          yoyo: Infinity
        }
    },
    textHover: {
      scale: 1.3,
      originX: 0,
      fontSize: 20,
      textTransform:"capitalize",
        transition:{
        duration: 0.5
        }
   }
  }
  


  return (
    <motion.div className="toppings container"
    variants={motionVariant}
      initial="initialState"
      animate="finalState"
      exit={{
        x: "-100vw",
        transition:{
          duration: 0.2,
          ease:"easeIn"
          
        }
        }}
      
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              variants={ButtonAnimate}
              whileHover="textHover"
             

            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={ButtonAnimate}
        whileHover="buttonHover"
        >
         
            order
         
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;