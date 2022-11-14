import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import Button from './Button';

const StyledMotionCard = styled(motion.div)`
  padding: 25px;
  background: rgb(247,247,247);
  background: rgb(9,33,112);
background: radial-gradient(circle, rgba(9,33,112,1) 12%, rgba(0,0,0,1) 71%, rgba(0,0,0,1) 95%);
  box-sizing: content-box;
  border-width: 1px;
  border-color: white;
  color: white;
  width: 450px;
  height: 550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

const StyledPerspectiveParent = styled.div`  
perspective: 500;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

const PerspectiveButton = () => {
  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-2, 2], {
    clamp: true,
  })
  const rotateX = useTransform(y, [0, 1], [2, -2], {
    clamp: true,
  })

  const onMove = (e:React.PointerEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect()

    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight
    
    x.set(xValue, true)
    y.set(yValue, true)
  }
  return (
    <StyledPerspectiveParent>
      <StyledMotionCard
        onPointerMove={e => onMove(e)}
        style={{
          rotateY,
          rotateX,
        }}
      >
        <Image src={logo} alt={"logo"} width={90} className="bg-white rounded-full mb-10"  />
        <h2 className='m-4 text-5xl mt-10 tracking-wide' >Next.js 13</h2><br/>
        <p className='font-thin text-md'>By Vercel</p>
        <br/>
        <p className='m-5 font-bold' >Bringing the power of full-stack to the frontend</p>
        <Button title={'Get Started'} format={'round'} BgColor={'white'} />
      </StyledMotionCard>
    </StyledPerspectiveParent>

  );
}

export default PerspectiveButton;