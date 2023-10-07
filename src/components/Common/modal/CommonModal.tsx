import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Add a CSS class to disable body scroll
      document.body.classList.add("modal-open");
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      // Remove the CSS class to enable body scroll
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      // Make sure to remove the CSS class when the component unmounts
      document.body.classList.remove("modal-open");
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={` fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50 `}
    >
      <div className="fixed top-0 left-0 w-full h-full  justify-center items-center pt-24 rounded-t-3xl pb-5 shadow-xl">
        <div className={`relative z-50 bg-white w-full max-w-screen-2xl h-full  shadow-gray-600 mx-5 rounded-t-3xl ${isOpen ? "h-[100vw]" : ""}`}  >
          <div className="absolute top-0 right-5 p-5 ">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-3"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className="z-50"
            style={{ overflowY: "auto", maxHeight: "80vh", width: "100%" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
