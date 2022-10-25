import Link from 'next/link';
import Image from 'next/image';
import styled from '../../styles/Navbar.module.scss';
import logo from '../../public/logo.svg';
import { FaLaptopCode, FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className={styled.container}>
        <div className={styled.navbar}>
          <Link title='To main site' href='/' passHref>
            <div className={styled.navbar_logo}>
              <Image src={logo} alt='andrea falzi logo' />
            </div>
          </Link>

          <ul className={styled.navbar_list}>
            <li>
              <Link href='/#works' scroll={false}>
                Works
              </Link>
            </li>
            <li>
              <Link href='/#about' scroll={false}>
                About
              </Link>
            </li>
            <li>
              <Link href='/#contact' scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <ul id='navbar-responsive' className={styled.navbar_responsive}>
          <li>
            <Link id='bodyNav' className='span-icon' href='/#home' scroll={false}>
              <>
                <FaHome />
                Home
              </>
            </Link>
          </li>
          <li>
            <Link id='worksNav' href='/#works' scroll={false}>
              <>
                <FaLaptopCode />
                Works
              </>
            </Link>
          </li>
          <li>
            <Link id='aboutNav' href='/#about' scroll={false}>
              <>
                <FaUser />
                About
              </>
            </Link>
          </li>
          <li>
            <Link id='contactNav' href='/#contact' scroll={false}>
              <>
                <FaEnvelope />
                Contact
              </>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
