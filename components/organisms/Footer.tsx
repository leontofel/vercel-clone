import React from 'react'
import Logo from '../atoms/Logo';
import FooterMenu from '../molecules/FooterMenu';

const Footer = () => {
  return (
    <footer className='flex justify-between gap-6 bg-zinc-900 text-white pt-6'>
        <hr />
        <Logo />
        <FooterMenu title={'Frameworks'} menuArray={['Next.js', 'Create React App', 'Svelte', 'Nuxt', 'Gatsby', 'Vue', 'Angular']} />
        <FooterMenu title={'Resources'} menuArray={['Documentatio', 'Experts', 'Customers', 'Guides', 'Help', 'API Reference', 'OSS']} />
        <FooterMenu title={'Company'} menuArray={['Home', 'Blog', 'Changelog', 'About', 'Careeers', 'Pricing', 'Enterprise']} />
        <FooterMenu title={'Legal'} menuArray={['PRivacy Policy', 'Terms of Service', 'Trademark Policy', 'Inactivity Policy', 'DMCA', 'Support Terms', 'DPA']} />
    </footer>
  )
}

export default Footer;