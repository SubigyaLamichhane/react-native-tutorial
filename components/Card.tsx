import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

interface CardProps {
  complain: {
    __typename?: 'Complain' | undefined;
    id: number;
    descriptionSnippet: string;
    title: string;
    createdAt: string;
    latitude: number;
    longitude: number;
    wardNo: number;
    imagePublicId: string;
  };
}

const Card: React.FC<CardProps> = ({ complain }) => {
  console.log(complain.imagePublicId);
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
         
          source={{
            uri:
              'https://res.cloudinary.com/infrastructure-ambulance/image/upload/' +
              complain.imagePublicId,
          }}
          style={styles.cardImage}
        />
        <Text style={styles.title}>{complain.title}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
    padding: 10,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});
