function ItemArea({ children }) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-4 py-12">
      {children}
    </div>
  );
}

export default ItemArea;
