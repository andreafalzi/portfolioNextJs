import Image from 'next/image';
import arrow from '../../public/assets/about_me_arrow.svg';
import image from '../../public/assets/AFimg.jpg';

import { aboutCards } from '../../constants';

import styled from '../../styles/About.module.scss';
import Card from '../Card/Card';

const About = () => {
  return (
    <div className={styled.about}>
      <div className={styled.container}>
        <h3 className={styled.title}>About</h3>
        <div className={styled.about_content}>
          <div className={styled.left}>
            <div className={styled.about_cards}>
              {aboutCards.map((item, index) => (
                <Card key={index} title={item.title} icon={item.icon} paragraph={item.paragraph} />
              ))}
            </div>
          </div>
          <div className={styled.center}>
            <Image src={arrow} alt='arrow with text on it' />
          </div>
          <div className={styled.right}>
            <div className={styled.blend_effect}>
              <Image src={image} alt='Andrea Falzi picture' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
