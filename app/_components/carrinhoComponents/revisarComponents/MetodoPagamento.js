function MetodoPagamento({ paymentMethod, setPaymentMethod, setTroco }) {
  return (
    <div className="mt-3">
      <label htmlFor="paymentMethod" className="font-semibold">
        Forma de pagamento
      </label>
      <select
        id="paymentMethod"
        name="paymentMethod"
        value={paymentMethod}
        onChange={(e) => {
          setPaymentMethod(e.target.value);
          setTroco(null);
        }}
        className="mt-3 w-full rounded-md border border-stone-300 p-2 focus:outline-none focus:ring focus:ring-orange-500"
      >
        <option value="dinheiro">Dinheiro</option>
        <option value="cartao">Cartão</option>
        <option value="pix">Pix</option>
      </select>
    </div>
  );
}

export default MetodoPagamento;
