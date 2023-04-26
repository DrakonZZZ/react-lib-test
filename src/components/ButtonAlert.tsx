import React, { ReactNode } from 'react';

interface Alert {
  children: ReactNode;
  onCloseHandle: () => void;
}

const ButtonAlert = ({ children, onCloseHandle }: Alert) => {
  return (
    <div className="alert  alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onCloseHandle}
      ></button>
    </div>
  );
};

export default ButtonAlert;
