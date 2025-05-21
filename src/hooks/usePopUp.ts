import { useState } from "react";
export function usePopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = () => {
    setIsOpen(true);
  };

  return { isOpen, openPopUp };
}
