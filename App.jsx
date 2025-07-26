import { useState, useEffect } from 'react';
import ProdutoCard from './componentes/ProdutoCard';
import camisaimg from './assets/camisa.jpg';
import coleiraimg from './assets/coleira.jpg';
import './styles/global.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: 'Camiseta Pet&Style',
          preco: '49.90',
          descricao: 'Camiseta confortável e estilosa.',
          imagem: camisaimg
        },
        {
          nome: 'Coleira Premium',
          preco: '89.90',
          descricao: 'Coleira reforçada para cães de médio porte.',
          imagem: coleiraimg
        }
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const imagemPadrao = 'https://placehold.co/150x150';

    setProdutos([
      ...produtos,
      {
        ...novoProduto,
        imagem: novoProduto.imagem || imagemPadrao
      }
    ]);
    setNovoProduto({ nome: '', preco: '', descricao: '', imagem: '' });
  }

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={handleChange}
          required
        />
        <input
          name="preco"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleChange}
          required
        />
        <input
          name="descricao"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={handleChange}
          required
        />
        <input
          name="imagem"
          placeholder="URL da imagem"
          value={novoProduto.imagem}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar Produto</button>
      </form>

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <div className="lista-produtos">
          {produtos.map((item, index) => (
            <ProdutoCard
              key={index}
              nome={item.nome}
              preco={item.preco}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
