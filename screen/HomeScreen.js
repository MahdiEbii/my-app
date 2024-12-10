
import { StyleSheet, View } from 'react-native';
import  SearchHome  from '../components/SearchHome';
import MenuHome from '../components/MenuHome';
import ContentHome from '../components/ContentHome'

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <SearchHome {...props} />
        <MenuHome {...props} />
        <ContentHome {...props} />
    </View>
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
