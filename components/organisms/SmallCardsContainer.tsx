import cardImg1 from '../../assets/small-card-1.png';
import cardImg2 from '../../assets/small-card-2.png';
import cardImg3 from '../../assets/small-card-3.png';
import cardImg4 from '../../assets/small-card-4.png';
import React from 'react'
import SmallCard from '../molecules/SmallCard';

const SmallCardsContainer = () => {
  return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-12'>
            <SmallCard img={cardImg1} title={'Powerfull routing and layouts'} subtitle={'Build complex interfaces while shipping less JavaScript'} square={false} />
            <SmallCard img={cardImg2} title={'Build on React Server Components,'} subtitle={'app now makes server-first the default'} square={true} />
            <SmallCard img={cardImg3} title={'Native support for custom fonts and images'} square={true} />
            <SmallCard img={cardImg4} title={'Dynamic HTML Streaming'} subtitle={'Support for HTML streaming, now on Vercel.'} square={false} />
        </div>
  );
}

export default SmallCardsContainer;