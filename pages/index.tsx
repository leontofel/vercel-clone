import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/organisms/Header';
import HomeDisplay from '../components/organisms/HomeDisplay';
import Footer from '../components/organisms/Footer';
import TechDisplay from '../components/organisms/TechDisplay';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Vercel clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-black font-space">
                <Header />
                <HomeDisplay />
                <TechDisplay />
                <Footer />
            </main>
        </>
    );
}

export default Home;
