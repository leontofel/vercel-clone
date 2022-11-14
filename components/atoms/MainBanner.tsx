import React from 'react';
import test from '../../assets/vercel1.png';
import Image from "next/image";

const MainBanner = () => {
    return (
        <section className="w-full h-70 flex justify-center pt-10">
            <Image src={test} alt="nextjs conference ad" width={1500} />
        </section>
    );
}

export default MainBanner;