import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 p-2 text-2xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
