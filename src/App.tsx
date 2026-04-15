import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Components/Header/Header';
import { CardProduto } from './Components/CardProduto/CardProduto';


function App() {
  return (
    <>
      <Header/>
      <CardProduto />

      <GlobalStyles />
    </>
  );
}

export default App;
