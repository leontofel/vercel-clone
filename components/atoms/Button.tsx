import { motion } from 'framer-motion';
import React from 'react';

interface Props {
    title: string,
    format: 'round' | 'square',
    BgColor: 'white' | 'black',
    
}
const Button = ({title, BgColor, format}: Props) => {
  return <motion.button 
            initial={{border: "none"}}
            animate={{ boxShadow: ["0px 0px 0px 0px lightblue", "0px 0px 0px 1px lightblue", "0px 0px 0px 2px lightblue", "0px 0px 0px 1px lightblue", "0px 00px 0px 0px lightblue", "0px 0px 0px 1px lightblue", "0px 0px 0px 2px lightblue", "0px 0px 0px 0px lightblue"]  }}
            transition={{ duration: 7, repeat: 30, easings: ["easeIn", "easeOut"] }}
            
            layout style={{ borderColor: 'whitesmoke' }} 
            className={`${BgColor === 'white' ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-black text-white hover:bg-white hover:text-black'} ${format === 'round' ? 'rounded-full' : 'rounded-md'} p-4 m-4 flex gap-2 items-center`}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
            </svg>
            {title} 
         </motion.button> 
}

export default Button;