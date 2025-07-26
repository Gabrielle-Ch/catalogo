function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  );
}

export default ProdutoCard;