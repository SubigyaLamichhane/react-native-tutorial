import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
  useDeviceOrientation
} from '@react-native-community/hooks';
import {
  StyleSheet
} from 'react-native';
import Navigator from './routes/homeStack';

const client = new ApolloClient({
  uri: 'https://infrastructureambulance.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
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
