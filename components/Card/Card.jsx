import { useState } from 'react';
import styled from '../../styles/Card.module.scss';
import { FaBook, FaAddressCard, FaUserGraduate, FaThumbsUp, FaThumbsDown, FaCoins, FaDesktop, FaHeartbeat } from 'react-icons/fa';

const Card = ({ title, paragraph, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  function icons(icon) {
    switch (icon) {
      case 'FaBook':
        return <FaBook />;
      case 'FaAddressCard':
        return <FaAddressCard />;
      case 'FaUserGraduate':
        return <FaUserGraduate />;
      case 'FaThumbsUp':
        return <FaThumbsUp />;
      case 'FaThumbsDown':
        return <FaThumbsDown />;
      case 'FaCoins':
        return <FaCoins />;
      case 'FaDesktop':
        return <FaDesktop />;
      case 'FaHeartbeat':
        return <FaHeartbeat />;

      default:
        break;
    }
  }

  return (
    <div className={`${styled.about_cards_card} ${isOpen ? styled.open : styled.close}`} onClick={() => setIsOpen((prev) => !prev)}>
      <h3 className={styled.about_cards_card_title}>
        {icons(icon)} {title}
      </h3>
      <div className={styled.about_cards_card_container}>
        <p className={styled.about_cards_card_container_paragraph}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
