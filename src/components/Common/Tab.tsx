"use client";
import React, { useState, ReactNode } from "react";

interface TabButton {
  id: string;
  label: string;
}

interface TabProps {
  buttons: TabButton[];
  children: ReactNode;
  bag?: string;
}

const Tab: React.FC<TabProps> = ({ buttons, children, bag }) => {
  const [activeButton, setActiveButton] = useState<string>(buttons[0].id);

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const activeComponent = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).props.id === activeButton
  );

  return (
    <div className="bg-transfarent">
      <div
        className={`tab p-3
        } sm:space-x-4 lg:space-x-8  lg:overflow-hidden mb-5 flex justify-center items-center w-full `}
      >
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`tab-button ${
              activeButton === button.id ? "active" : ""
            }`}
            onClick={() => handleClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div>{activeComponent}</div>
    </div>
  );
};

export default Tab;
