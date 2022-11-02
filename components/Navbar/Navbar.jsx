import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styled from '../../styles/Navbar.module.scss';
import logo from '../../public/logo.svg';
import { MdMenu, MdClose } from 'react-icons/md';
import Button from '../Button';

const Navbar = ({ refValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToAboutRef, scrollToProjectsRef, scrollToSkillsRef } = refValues;
  return (
    <nav className={styled.nav}>
      <div className={styled.navbar}>
        <Link title='To main site' href='/'>
          <div className={styled.navbar_logo}>
            <Image src={logo} alt='andrea falzi logo' />
          </div>
        </Link>

        <ul className={styled.navbar_list}>
          <li onClick={() => scrollToAboutRef.current.scrollIntoView()}>
            <a>About</a>
          </li>
          <li onClick={() => scrollToProjectsRef.current.scrollIntoView()}>
            <a>Projects</a>
          </li>
          <li onClick={() => scrollToSkillsRef.current.scrollIntoView()}>
            <a>Skills</a>
          </li>
        </ul>
        {/* <FaEnvelope /> */}
        {!isOpen ? <MdMenu onClick={() => setIsOpen((prev) => !prev)} /> : <MdClose onClick={() => setIsOpen((prev) => !prev)} />}
        <ul className={`${styled.navbar_responsive} ${isOpen ? styled.open : ''}`}>
          <li onClick={() => setIsOpen((prev) => !prev)}>
            <a onClick={() => scrollToAboutRef.current.scrollIntoView()}>About</a>
          </li>
          <li onClick={() => setIsOpen((prev) => !prev)}>
            <a onClick={() => scrollToProjectsRef.current.scrollIntoView()}>Projects</a>
          </li>
          <li onClick={() => setIsOpen((prev) => !prev)}>
            <a onClick={() => scrollToSkillsRef.current.scrollIntoView()}>Skills</a>
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
