import React from 'react'

interface Props{
    title: string,
    icon: string,
    subtitle: string,
}
const FeaturesItem = ({title, icon, subtitle}: Props) => {
  return (
    <div>
        
        <li className='w-full'>
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </li>
        
    </div>
        

  )
}

export default FeaturesItem;