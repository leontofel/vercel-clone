import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface Props {
    img: StaticImageData,
    title: string,
    subtitle?: string,
    square: boolean
}

const SmallCard = ({img, subtitle, title, square}: Props) => {
  return (
        <motion.div 
        className={`${square ? "h-5/6" : "h-full"} text-white border-2 border-gray-200 tracking-wide rounded  cursor-pointer hover:opacity-50`}
        initial={{y: 300}}
        whileInView={{y:0}}
        transition={{duration: 1, bounce: 4}}
        >
            <Image src={img} alt="tech card link" width={700}/>
            <h2  className='text-center mx-1 p-2 tracking-wide text-xl font-bold' >{title}</h2>
            <h3 className='text-center p-2 mb-3 pb-2 tracking-wide text-lg'>{subtitle}</h3>
        </motion.div>
  )
}

export default SmallCard;