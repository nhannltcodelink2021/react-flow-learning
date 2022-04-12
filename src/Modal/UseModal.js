import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [openModal, setopenModal] = useState("OK123");

  function toggle(type) {
    setopenModal(type);
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle,
    openModal,
  };
};

export default useModal;
