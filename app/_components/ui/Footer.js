import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-3 bg-orange-400 p-4">
      <p>
        Site desenvolvido por <span className="font-bold">Leonardo Cunha</span>
      </p>
      <a
        href="https://www.linkedin.com/in/leonardo-cunha-8a6170263/"
        target="a_blank"
      >
        <FaLinkedin className="h-10 w-10 text-stone-950 duration-300 hover:text-stone-100" />
      </a>
    </footer>
  );
}

export default Footer;
