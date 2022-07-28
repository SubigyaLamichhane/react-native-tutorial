import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  navigation: any;
}

const Header: React.FC<HeaderProps> = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: '#fff',
  },
});

export default Header;
