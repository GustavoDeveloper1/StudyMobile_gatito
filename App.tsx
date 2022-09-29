
import { StyleSheet } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Servicos from './src/telas/Servicos';
import Carrinho from './src/telas/Carrinho';

export default function App() {
  return (
    // <Servicos />
    <Carrinho/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
