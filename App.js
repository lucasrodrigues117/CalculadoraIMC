import { StyleSheet, Text, View } from 'react-native';
import FormIMC from './src/components/FormIMC';
import Title from './src/components/Title';
import Result from './src/components/Result';
import TabelaIMC from './src/components/TabelaIMC';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />             
      <Result />
      <TabelaIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
