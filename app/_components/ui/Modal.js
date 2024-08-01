"use client";

import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import {
  cloneElement,
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (x) => setOpenName(x);

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {name === openName && (
        <>
          <motion.div
            className="fixed left-0 top-0 z-[90] h-screen w-full bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          />
          <div className="fixed left-1/2 top-1/2 z-[100] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              ref={ref}
              className="rounded-lg bg-stone-50 p-8 shadow-lg"
            >
              <button
                onClick={close}
                className="hover:bg-color-grey-100 absolute right-5 top-3 translate-x-2 rounded-sm border-none bg-none p-1"
              >
                <HiXMark className="text-color-grey-500 h-6 w-6" />
              </button>
              <div>
                {cloneElement(children, {
                  onCloseModal: close,
                })}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

// "use client";

// import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
// import { cloneElement, createContext, useContext, useState } from "react";
// import { createPortal } from "react-dom";
// import { HiXMark } from "react-icons/hi2";

// import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";

// const ModalContext = createContext();

// function Modal({ children }) {
//   const [openName, setOpenName] = useState("");

//   const close = () => setOpenName("");
//   const open = (x) => setOpenName(x);

//   return (
//     <ModalContext.Provider value={{ open, close, openName }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// function Open({ children, opens: opensWindowName }) {
//   const { open } = useContext(ModalContext);

//   return cloneElement(children, {
//     onClick: () => open(opensWindowName),
//   });
// }

// function Window({ children, name }) {
//   const { openName, close } = useContext(ModalContext);
//   const ref = useOutsideClick(close);

//   if (name !== openName) return null;

//   return createPortal(
//     <>
//       <div className="fixed left-0 top-0 z-[90] h-screen w-full bg-black opacity-30"></div>

//       <div className="fixed left-1/2 top-1/2 z-[100] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{
//             opacity: 0,
//             y: 100,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 260,
//             damping: 20,
//           }}
//           ref={ref}
//           className="rounded-lg bg-stone-50 p-8 shadow-lg"
//         >
//           <AnimatePresence>
//             <button
//               onClick={close}
//               className="hover:bg-color-grey-100 absolute right-5 top-3 translate-x-2 rounded-sm border-none bg-none p-1"
//             >
//               <HiXMark className="text-color-grey-500 h-6 w-6" />
//             </button>
//           </AnimatePresence>
//           <div>
//             {cloneElement(children, {
//               onCloseModal: close,
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </>,
//     document.body,
//   );
// }

// Modal.Open = Open;
// Modal.Window = Window;

// export default Modal;
