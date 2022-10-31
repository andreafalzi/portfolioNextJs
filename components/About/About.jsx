import styled from '../../styles/About.module.scss';
import Button from '../Button';

const About = () => {
  return (
    <div className={styled.about}>
      <div className={styled.container}>
        <h4>Let me indruduce myself</h4>
        <h3 className={styled.title}>About me</h3>
        <h5>A story of hardwork and perseverance.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus quibusdam perspiciatis vero sint praesentium expedita laboriosam deleniti vel itaque!</p>
        <h5>A story of hardwork and perseverance.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat delectus quibusdam perspiciatis vero sint praesentium expedita laboriosam deleniti vel itaque!</p>
        <a href='https://drive.google.com/file/d/1hGvqBdknYoymfF6Hzc2vepMpoKQn0QXE/view?usp=share_link'>
          <Button>Download CV</Button>
        </a>
      </div>
    </div>
  );
};

export default About;
