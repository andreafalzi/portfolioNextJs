import styled from '../../styles/Header.module.scss';
import { FaLinkedinIn, FaGithub, FaCodepen, FaTwitter, FaHandshake, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styled.header}>
      <div className={`${styled.container} ${styled.hero_container}`}>
        <div id='hero' className={styled.hero}>
          <div className={styled.hero_title}>
            <h1>
              <span>Web Experiences</span>
              <span>Crafted With</span>
              <span>Coding Powers</span>
            </h1>
            <p>
              <FaHandshake /> Meet Andrea Falzi
            </p>
          </div>

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
              <li>
                <a href='https://codepen.io/andreafalzi' target='_blank' rel='noreferrer' aria-label='Codepen'>
                  <FaCodepen />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/andrea_falzi' target='_blank' rel='noreferrer' aria-label='Twitter'>
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styled.svg_container}>
          <div className={styled.svg_text}>Explore my craftings</div>
          <div className={styled.svg_box}>
            <a data-nav-anchor href='#works' aria-label='Press down and visit works section'>
              <div className={styled.svg}>
                <div className={styled.square}></div>
                <div className={styled.square}></div>
                <div className={styled.arrow}>
                  <FaChevronDown />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
