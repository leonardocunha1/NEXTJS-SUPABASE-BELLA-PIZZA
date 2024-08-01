"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function ConfettiClient({ show }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Atualiza a largura e a altura da janela quando redimensionada
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!show) return null;

  return <Confetti width={windowWidth} height={windowHeight} />;
}

export default ConfettiClient;
