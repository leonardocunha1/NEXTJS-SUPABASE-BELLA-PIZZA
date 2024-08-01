function ButtonCarrinho({ children, onClick }) {
  return (
    <button
      className="disabled:cursor-not-allowed' inline-block rounded-full bg-orange-500 px-2 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-orange-600 focus:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonCarrinho;
