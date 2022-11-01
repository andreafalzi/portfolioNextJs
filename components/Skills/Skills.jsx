import Image from 'next/image';
import laptop from '../../public/assets/laptop.gif';
import { skillsData } from '../../constants/data';
import { motion } from 'framer-motion';
import styled from '../../styles/Skills.module.scss';

const Skills = () => {
  const scaleSlide = {
    hidden: { scale: 0, x: '15vw' },
    visible: { scale: 1, x: '0vw' },
  };

  const iconPopContainer = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const iconPop = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  return (
    <div className={styled.skills}>
      <div className={styled.container}>
        <h4>My current toolkit</h4>
        <h3 className={styled.title}>Skills</h3>
        <motion.div className={styled.skills_box} variants={iconPopContainer} initial='hidden' whileInView='visible' viewport={{ amount: 'all', once: true }}>
          {skillsData.map(({ title, src }) => (
            <motion.div variants={iconPop} key={title} className={styled.skill_circle} title={title}>
              <Image src={src} alt={title} layout='fill' objectFit='cover' />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div variants={scaleSlide} initial='hidden' whileInView='visible' viewport={{ amount: 'all', once: true }} className={styled.gif}>
        <Image src={laptop} alt='laptop' />
      </motion.div>
    </div>
  );
};

export default Skills;
