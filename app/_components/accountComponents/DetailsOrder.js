import { formatCurrency } from "@/utils/helpers";

function DetailsOrder({ orderItems }) {
  //   console.log(orderItems);
  return (
    <>
      <h2 className="mb-3 text-center text-xl font-semibold tracking-widest">
        Detalhes do seu pedido
      </h2>
      <ul>
        {orderItems.map((item) => (
          <li key={item.id}>
            <div>
              <p>
                <span className="font-semibold text-orange-600">
                  {item.products.name} -{" "}
                </span>
                {item.products.category === "Pizza" ? (
                  <span>{item.size}</span>
                ) : (
                  ""
                )}
                {item.products.category === "Pizza" && item.borda === false && (
                  <span> - sem borda - </span>
                )}
                {item.products.category === "Pizza" && item.borda === true && (
                  <span> - com Borda - </span>
                )}
                <span className="font-semibold">{item.quantity} &times; </span>
                <span className="ml-auto font-semibold">
                  {formatCurrency(item.priceUnity)}
                </span>
              </p>
              {item.observation !== "" &&
                item.observation !== null &&
                item.observation !== undefined && (
                  <p className="italic">
                    <span>Observações: </span>
                    {item.observation}
                  </p>
                )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DetailsOrder;
