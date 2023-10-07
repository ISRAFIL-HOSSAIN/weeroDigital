import React from "react";

interface TextProps {
  text: string;
  className?: string;
}

const PText: React.FC<TextProps> = ({ text, className }) => {
  return (
    <p
      className={`text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text ${className}`}
    >
      {text}
    </p>
  );
};

const HText: React.FC<TextProps> = ({ text, className }) => {
  return (
    <h3
      className={`text-transparent bg-gradient-to-r from-pink-500 via-emerald-500 to-purple-500 bg-clip-text ${className}`}
    >
      {text}
    </h3>
  );
};

export { PText, HText };
