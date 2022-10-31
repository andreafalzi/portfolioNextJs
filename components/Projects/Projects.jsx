import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../constants/data';
import Image from 'next/image';
import { IoMdGlobe, IoLogoGithub } from 'react-icons/io';
import styled from '../../styles/Projects.module.scss';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
    setFilterProjects(projectsData);
  }, []);

  const handleProjectsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div className={styled.projects}>
      <div className={styled.container}>
        <h4>List of my latest works</h4>
        <h3 className={styled.title}>Projects</h3>
        <div className={styled.projects_filter}>
          {['All', 'WebApp', 'React', 'Next JS', 'Vanilla JS'].map((item, index) => (
            <div key={index} onClick={() => handleProjectsFilter(item)} className={`${styled.filter_item} ${activeFilter === item ? styled.active : ''}`}>
              {item}
            </div>
          ))}
        </div>
        <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className={styled.project_list}>
          {filterProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
