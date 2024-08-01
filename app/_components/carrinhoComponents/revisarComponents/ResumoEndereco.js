function ResumoEndereco({ cepData }) {
  if (!cepData) return null;

  return (
    <div className="mt-2 rounded-md border p-2">
      <p>
        <strong>Logradouro:</strong> {cepData.logradouro}
      </p>
      <p>
        <strong>Bairro:</strong> {cepData.bairro}
      </p>
      <p>
        <strong>Cidade:</strong> {cepData.localidade}
      </p>
      <p>
        <strong>Estado:</strong> {cepData.uf}
      </p>
      <p>
        <strong>Número:</strong> {cepData.numero}
      </p>
    </div>
  );
}

export default ResumoEndereco;
