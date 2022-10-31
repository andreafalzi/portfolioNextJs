import styled from '../../styles/Header.module.scss';
import { FaLinkedinIn, FaGithub, FaCodepen, FaTwitter, FaHandshake, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import profileImg from '../../public/assets/AFimg.jpg';
import Button from '../Button';

const Header = () => {
  return (
    <header className={styled.header}>
      <div className={`${styled.container} ${styled.hero}`}>
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
        <a href='#projects'>
          <Button btnStyle='invertedBtn'>View my Projects</Button>
        </a>
        <div className={styled.scroll_action}>
          <p>Scroll down for more</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
