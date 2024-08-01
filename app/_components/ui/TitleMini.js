import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function TitleMini({ children }) {
  return (
    <h3
      className={`${calistoga.className} text-center text-4xl font-bold lg:text-5xl`}
    >
      {children}
    </h3>
  );
}

export default TitleMini;
