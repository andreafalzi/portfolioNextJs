import { aboutData } from '../../constants/data';
import { aboutCvLink } from '../../constants/data';
import Button from '../Button';
import Image from 'next/image';
import aboutImage from '../../public/assets/aboutMe.jpg';
import { motion } from 'framer-motion';
import styled from '../../styles/About.module.scss';

const About = () => {
  return (
    <div className={styled.about}>
      <div className={styled.container}>
        <motion.h4 initial={{ opacity: 0, x: '-100' }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 'all', once: true }}>
          Let me intruduce myself
        </motion.h4>
        <motion.h3 initial={{ opacity: 0, x: '-100' }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 'all', once: true }} className={styled.title}>
          About me
        </motion.h3>
        <div className={styled.about_container}>
          <motion.div initial={{ opacity: 0, x: '-100' }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 'all', once: true }} className={styled.about_image}>
            <Image src={aboutImage} alt='computer desktop' />
          </motion.div>
          <div className={styled.about_box}>
            {aboutData.map((data, index) => (
              <motion.div key={index} className={styled.about_content} initial={{ opacity: 0, y: '-100' }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 'all', once: true }}>
                <h5>{data.title}</h5>
                <p>{data.text}</p>
              </motion.div>
            ))}
            <div className={styled.resume_box}>
              {aboutCvLink.map((data, index) => (
                <a key={index} href={data.link} target='_blank' rel='noreferrer'>
                  <Button>{data.title}</Button>
                </a>
              ))}
            </div>
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
