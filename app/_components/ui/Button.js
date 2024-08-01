import Link from "next/link";
import { motion } from "framer-motion";

function Button({
  children,
  font = "font-normal",
  onClick,
  type = "button",
  href = "/",
  icon,
}) {
  const style = `bg-orange-500 rounded-xl flex items-center gap-2 bg-orange-500 px-3 py-2 ${font} text-stone-50 hover:bg-orange-600 font-semibold tracking-wider`;

  if (type === "link") {
    return (
      <motion.div
        whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500 }}
        className={style}
      >
        {icon}
        <Link href={href} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500 }}
      className={style}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
