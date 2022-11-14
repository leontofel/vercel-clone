import React from 'react'

interface Props {
    title: string,
    menuArray: string[],
}
const FooterMenu = ({menuArray, title}: Props) => {
  return (
    <div className='mr-12 mb-10'>
        <h5 className='cursor-default mb-4 font-bold text-lg'>{title}</h5>
        {menuArray.map(item => <p className='cursor-pointer text-gray-500 hover:underline hover:text-gray-400 m-1'>{item}</p>)}
    </div>
  )
}

export default FooterMenu;