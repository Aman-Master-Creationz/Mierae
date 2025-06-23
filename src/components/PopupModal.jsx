import React from "react";

const PopupModal = ({ title, content, onClose }) => {
  return (
    <div className="modal_overlay">
      <div className="modal_box">
        <button className="modal_close" onClick={onClose}>×</button>
        <h2 className="modal_title">{title}</h2>
        <div className="modal_body">{content}</div>
      </div>
    </div>
  );
};

export default PopupModal;
