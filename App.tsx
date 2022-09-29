
import { StyleSheet } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Rotas from './src/Routes';

export default function App() {
  return (
    <Rotas/>
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
