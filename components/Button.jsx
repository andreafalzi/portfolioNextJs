import React from 'react';
import styled from '../styles/Button.module.scss';

const BUTTON_STYLE_CLASSES = {
  primaryBtn: 'primaryBtn',
  invertedBtn: 'invertedBtn',
};

// eslint-disable-next-line react/display-name
const Button = React.forwardRef(({ children, btnStyle = 'primaryBtn', ...otherProps }, ref) => {
  return (
    <button ref={ref} className={`${styled.btn} ${styled[BUTTON_STYLE_CLASSES[btnStyle]]}`} {...otherProps}>
      {children}
    </button>
  );
});

export default Button;
