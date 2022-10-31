import Image from 'next/image';
import { skillsData } from '../../constants/data';
import styled from '../../styles/Skills.module.scss';

const Skills = () => {
  return (
    <div className={styled.skills}>
      <div className={styled.container}>
        <h4>My current toolkit</h4>
        <h3 className={styled.title}>Skills</h3>
        <div className={styled.skills_box}>
          {skillsData.map(({ title, src }) => (
            <div key={title} className={styled.skill_circle} title={title}>
              <Image src={src} alt={title} layout='fill' objectFit='cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
