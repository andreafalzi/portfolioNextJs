import { useEffect, useState } from 'react';
import Image from 'next/image';
import profileImg from '../../public/assets/afhead.jpg';
import personalHero from '../../public/assets/standingMe2.png';
import Button from '../Button';
import { motion } from 'framer-motion';
import styled from '../../styles/Header.module.scss';

const Header = ({ refValues }) => {
  //bug fix big image glitch on Devices < 1366px
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const isMobile = windowSize < 1366;

  const opacitySlideContainer = {
    hidden: { opacity: 0, x: '-100px' },
    visible: {
      opacity: 1,
      x: '0',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const opacitySlideItem = {
    hidden: { opacity: 0, x: '-100px' },
    visible: { opacity: 1, x: '0' },
  };

  return (
    <motion.header className={styled.header} variants={opacitySlideContainer} initial='hidden' animate='visible'>
      <div className={`${styled.container} ${styled.hero}`}>
        <motion.div className={styled.hero_title} variants={opacitySlideItem}>
          <h3>{`Hello, I'm a`}</h3>
          <h1>
            <span>
              {`<React />`} <br />
            </span>
            Web Developer
          </h1>
          <div className={styled.hero_image}>
            <Image src={profileImg} alt='andrea falzi personal' layout='fill' objectFit='cover' priority={true} />
          </div>
          <p>Hi, my name is Andrea Falzi, dedicated and enthusiastic Frontend/Web Developer.</p>
        </motion.div>
        <motion.a onClick={() => refValues.current.scrollIntoView()} variants={opacitySlideItem}>
          <Button btnStyle='invertedBtn'>View my Projects</Button>
        </motion.a>
        <motion.div className={styled.scroll_action} variants={opacitySlideItem}>
          <p>Scroll down for more</p>
        </motion.div>
      </div>
      {!isMobile && (
        <motion.div className={styled.personal_hero} variants={opacitySlideItem}>
          <Image src={personalHero} alt='full picture of me' layout='fill' objectFit='contain' priority={true} />
        </motion.div>
      )}

      <div className={styled.shaper}>
        <div className={styled.outside}>
          <div className={styled.inside}></div>
        </div>
      </div>
      <div className={styled.shaperTwo}>
        <div className={styled.outside}>
          <div className={styled.inside}></div>
        </div>
      </div>
      <div className={styled.shaperThree}>
        <div className={styled.outside}>
          <div className={styled.inside}></div>
        </div>
      </div>
      <div className={styled.shaperFour}>
        <div className={styled.outside}>
          <div className={styled.inside}></div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
