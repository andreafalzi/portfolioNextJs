import { aboutData } from '../../constants/data';
import Button from '../Button';
import Image from 'next/image';
import aboutImage from '../../public/assets/aboutMe.jpg';
import styled from '../../styles/About.module.scss';

const About = () => {
  return (
    <div className={styled.about}>
      <div className={styled.container}>
        <h4>Let me intruduce myself</h4>
        <h3 className={styled.title}>About me</h3>
        <div className={styled.about_container}>
          <div className={styled.about_image}>
            <Image src={aboutImage} alt='computer desktop' />
          </div>
          <div className={styled.about_box}>
            {aboutData.map((data, index) => (
              <div key={index} className={styled.about_content}>
                <h5>{data.title}</h5>
                <p>{data.text}</p>
              </div>
            ))}
            <a href='https://drive.google.com/file/d/1hGvqBdknYoymfF6Hzc2vepMpoKQn0QXE/view?usp=share_link' target='_blank' rel='noreferrer'>
              <Button>Download CV</Button>
            </a>
          </div>
        </div>
      </div>
      <div className={styled.shaperTwo}>
        <div className={styled.outside}>
          <div className={styled.inside}></div>
        </div>
      </div>
      <div className={styled.shaperOne}>
        <div className={styled.outside}>
          <div className={styled.inside}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
