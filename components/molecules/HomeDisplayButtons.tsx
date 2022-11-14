import React from 'react';
import Button from '../atoms/Button';

const HomeDisplayButtons = () => {
    return (
        <section className='w-full flex justify-center mb-12'>
            <Button title={'Start Deploying'} format={'round'} BgColor={'white'} />
            <Button title={'Replay the event'} format={'square'} BgColor={'black'} />
        </section>
    );
}

export default HomeDisplayButtons;