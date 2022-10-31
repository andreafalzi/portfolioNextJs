import styled from '../../styles/Header.module.scss';
import { FaLinkedinIn, FaGithub, FaCodepen, FaTwitter, FaHandshake, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import profileImg from '../../public/assets/AFimg.jpg';
import Button from '../Button';

const Header = () => {
  return (
    <header className={styled.header}>
      <div className={`${styled.container}`}>
        <div id='hero' className={styled.hero}>
          <div className={styled.hero_title}>
            <h3>{`Hello, I'm a`}</h3>
            <h1>
              <span>
                {`<React />`} <br />
              </span>
              Web Developer
            </h1>
            <div className={styled.hero_image}>
              <Image src={profileImg} alt='andrea falzi personal' />
            </div>
            <p>Hi, my name is Andrea Falzi, dedicated and enthusiastic Frontend/Web Developer.</p>
          </div>
          <Link href='/#projects' passHref>
            <Button btnStyle='invertedBtn'>View Projects</Button>
          </Link>

          <div className={styled.hero_social}>
            <ul>
              <li>
                <a href='https://github.com/andreafalzi' target='_blank' rel='noreferrer' aria-label='Github'>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/andreafalzi/' target='_blank' rel='noreferrer' aria-label='Linkedin'>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
