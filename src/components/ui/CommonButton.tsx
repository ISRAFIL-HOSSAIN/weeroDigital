import React from 'react';

interface ButtonProps {
  width?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CommonButton: React.FC<ButtonProps> = ({ width, onClick, children }) => {
  const buttonStyle: React.CSSProperties = {
    width: width || '200px', // Default to 'auto' if no width is provided
  };

  return (
    <button style={buttonStyle} onClick={onClick}
    className={`px-2  animate-gradient btn gradient-emerald-400-600 rounded-full  font-medium text-lg font-poppins hover:shadow-xl hover:shadow-gray-600`}>
      {children}
    </button>
  );
};

export default CommonButton;
