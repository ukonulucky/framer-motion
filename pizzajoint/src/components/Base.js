import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  const hoverVariant = {
    buttonHover: 
      {
        boxShadow: "2 5 95 18 rgb(59,194,59,0.75)",
        originX: 0,
        scale: 1.4,
        textTransform: 'capitalize',
      color: "yellow",
      transition:{
        type: "spring",
        stiffness: 250
      }
    },
    initialState : {
      x : "-100vw"
    },
    finalState: {
      x: 0,
      transition:{
        type: "spring",
        stiffness: 80
      }
    }
   
    
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
    <motion.div className="base container"
    
      exit={{
        x: "-100vw",
        transition:{
          duration: 0.2,
          ease:"easeIn"
          
        }
      }}
    
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              variants={ hoverVariant}
              whileHover="buttonHover"
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={buttonVariant}
          whileHover = "hover"
        >
          <Link to="/toppings">
            <motion.button
              variants={hoverVariant}
              whileHover="buttonHover"
              initial="initialState"
              animate = "finalState"
    
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;