import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styled from '../../styles/Navbar.module.scss';
import logo from '../../public/logo.svg';
import { MdMenu, MdClose } from 'react-icons/md';
import Button from '../Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styled.nav}>
      <div className={styled.navbar}>
        <Link title='To main site' href='/'>
          <div className={styled.navbar_logo}>
            <Image src={logo} alt='andrea falzi logo' />
          </div>
        </Link>

        <ul className={styled.navbar_list}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
        </ul>
        {/* <FaEnvelope /> */}
        {!isOpen ? <MdMenu onClick={() => setIsOpen((prev) => !prev)} /> : <MdClose onClick={() => setIsOpen((prev) => !prev)} />}
        <ul className={`${styled.navbar_responsive} ${isOpen ? styled.open : ''}`}>
          <li onClick={() => setIsOpen((prev) => !prev)}>
            <a href='#about'>About</a>
          </li>
          <li onClick={() => setIsOpen((prev) => !prev)}>
            <a href='#projects'>Projects</a>
          </li>
          <li onClick={() => setIsOpen((prev) => !prev)}>
            <a href='#skills'>Skills</a>
          </li>
        </ul>
        <a href='mailto:af@andreafalzi.dev' className={styled.mail_link}>
          <Button>{`Let's talk`}</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
