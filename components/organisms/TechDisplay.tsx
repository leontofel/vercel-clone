import React from 'react';
import PerspectiveButton from '../atoms/PerspectiveButton';
import SmallCardsContainer from './SmallCardsContainer';

const TechDisplay = () => {
    return (
        <section className='flex m-6 gap-6' >
            <PerspectiveButton />
            <SmallCardsContainer />
        </section>
    );
}

export default TechDisplay;