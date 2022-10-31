import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styled from '../../styles/Navbar.module.scss';
import logo from '../../public/logo.svg';
import { FaLaptopCode, FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styled.nav}>
      <div className={styled.container}>
        <div className={styled.navbar}>
          <Link title='To main site' href='/'>
            <div className={styled.navbar_logo}>
              <Image src={logo} alt='andrea falzi logo' />
            </div>
          </Link>

          <ul className={styled.navbar_list}>
            <li>
              <Link href='#hello'>Hello</Link>
            </li>
            <li>
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#projects'>Projects</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
          {/* <FaEnvelope /> */}
          {!isOpen ? <MdMenu onClick={() => setIsOpen((prev) => !prev)} /> : <MdClose onClick={() => setIsOpen((prev) => !prev)} />}
          <ul className={`${styled.navbar_responsive} ${isOpen ? styled.open : ''}`}>
            <li>
              <Link href='#hello'>Hello</Link>
            </li>
            <li>
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#projects'>Projects</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
