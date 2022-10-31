import Image from 'next/image';
import styled from '../styles/ProjectCard.module.scss';
import { IoLogoGithub, IoMdGlobe } from 'react-icons/io';

const ProjectCard = ({ project }) => {
  return (
    <div className={styled.project_item}>
      <div className={styled.project_image}>
        <Image src={project.image} alt={project.title} layout='fill' objectFit='cover' />
      </div>
      <div className={styled.project_content}>
        <h4 className={styled.project_title}>{project.title}</h4>
        <p className={styled.project_text}>{project.description}</p>
        <div className={styled.project_tag}>
          <p>{project.tags[0]}</p>
        </div>
      </div>
      <div className={styled.project_hover}>
        <a href={project.link} target='_blank' rel='noopener noreferrer'>
          <div className={styled.project_link}>
            <IoMdGlobe />
          </div>
        </a>
        <a href={project.git} target='_blank' rel='noopener noreferrer'>
          <div className={styled.project_link}>
            <IoLogoGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
