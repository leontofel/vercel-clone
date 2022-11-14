import Link from "next/link";
import Logo from "../atoms/Logo";
import FeaturesMenu from "../molecules/FeaturesMenu";

const Header = () => {
  return (
    <header className="flex backdrop-blur-sm gap-12 h-20 shadow-white fixed">
      <Logo />
      <nav className='mx-12'>
        <ul className="flex text-white m-7 gap-x-10">
          <FeaturesMenu />
          <li className="text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100">Templates</li>
          <li className="text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100">Integrations</li>
          <li className="text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100">Customers</li>
          <li className="text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100">Enterprise</li>
          <li className="text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100">Pricing</li>
        </ul>
      </nav>

      <aside className="flex text-white items-center justify-between gap-x-3 m-2 ml-12">
        <Link href={'/'} className='text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100'>Contact</Link>
        <Link href={'/'} className='text-sm cursor-pointer text-gray-400 hover:text-cursor-pointer hover:text-gray-100'>Docs</Link>
        <button className="rounded bg-white text-black p-2 hover:bg-black hover:text-white hover:border-2 border-white duration-300" >Sign up</button>
      </aside>
    </header>
  );
}

export default Header;