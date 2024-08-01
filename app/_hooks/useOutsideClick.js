import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handler();
        }
      }

      function handleKeyDown(event) {
        if (event.key === "Escape") {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      document.addEventListener("keydown", handleKeyDown, listenCapturing);

      return function () {
        document.removeEventListener("click", handleClick, listenCapturing);
        document.removeEventListener("keydown", handleKeyDown, listenCapturing);
      };
    },
    [handler, listenCapturing],
  );

  return ref;
}
