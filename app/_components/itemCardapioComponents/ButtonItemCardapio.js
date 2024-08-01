function ButtonItemCardapio({ children, onChangePizza, size, tipo }) {
  return (
    <button
      className={`inline-block rounded-lg bg-orange-600 px-2 py-1 text-sm font-semibold tracking-wide text-stone-50 transition-colors duration-300 hover:bg-orange-700 ${size === tipo ? "bg-orange-700 ring ring-orange-700 ring-offset-2" : ""}`}
      onClick={onChangePizza}
    >
      {children}
    </button>
  );
}

export default ButtonItemCardapio;
