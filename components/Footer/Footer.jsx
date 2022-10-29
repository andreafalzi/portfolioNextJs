import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaCodepen, FaTwitter } from 'react-icons/fa';
import logo from '../../public/logo.svg';
import styled from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <div className={styled.container}>
        <div className={styled.logo}>
          <Image src={logo} alt='andrea falzi logo' />
        </div>
        <div className={styled.footer_links}>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/andreafalzi/' target='_blank' rel='noreferrer' aria-label='Linkedin'>
                <FaLinkedin /> Linkedin
              </a>
            </li>
            <li>
              <a href='https://github.com/andreafalzi' target='_blank' rel='noreferrer' aria-label='Github'>
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a href='https://codepen.io/andreafalzi' target='_blank' rel='noreferrer' aria-label='Codepen'>
                <FaCodepen /> Codepen
              </a>
            </li>
            <li>
              <a href='https://twitter.com/andrea_falzi' target='_blank' rel='noreferrer' aria-label='Twitter'>
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className={styled.copy}>
          <p>
            &copy;<span>{new Date().getFullYear()}</span> Andrea Falzi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;