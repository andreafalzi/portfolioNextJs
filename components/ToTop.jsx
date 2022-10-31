import React, { useEffect, useState } from 'react';
import styled from '../styles/ToTop.module.scss';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ToTop = () => {
  //navbar scroll when active state
  const [toTop, setToTop] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {toTop && (
        <div className={styled.top_arrow} onClick={goToTop}>
          <MdKeyboardArrowUp />
        </div>
      )}
    </>
  );
};

export default ToTop;
