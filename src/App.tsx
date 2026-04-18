import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './Components/Header/Header';
import { ListaDeProdutos } from './Components/ListaDeProdutos/ListaDeProdutos';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Header/>
      <ListaDeProdutos />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
