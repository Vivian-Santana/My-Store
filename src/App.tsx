import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Components/Header/Header';
import { ListaDeProdutos } from './Components/ListaDeProdutos/ListaDeProdutos';


function App() {
  return (
    <>
      <Header/>
      <ListaDeProdutos />

      <GlobalStyles />
    </>
  );
}

export default App;
