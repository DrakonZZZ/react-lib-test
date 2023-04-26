import React, { Children, ReactNode } from 'react';

interface ButtonText {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  onClickHandler: () => void;
}

const Button = ({
  children,
  onClickHandler,
  color = 'primary',
}: ButtonText) => {
  return (
    <>
      <button
        type="button"
        className={'btn btn-' + color}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
