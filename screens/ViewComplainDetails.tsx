import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useComplainQuery } from '../src/generated/graphql';

interface ViewComplainDetailProps {
  navigation: any;
}

const ViewComplainDetail: React.FC<ViewComplainDetailProps> = ({
  navigation,
}) => {
  const id = navigation.getParam('id');
  const { data, loading } = useComplainQuery({
    variables: {
      id,
    },
  });
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else if (!data) {
    return (
      <View>
        <Text>No Internet Connection!!!</Text>
      </View>
    );
  }
  const complain = data.complain;
  if (!complain) {
    return (
      <View>
        <Text>No Complain Found!!!</Text>
      </View>
    );
  }
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
        <Text style={styles.description}>{complain.description}</Text>
        <Text style={styles.description}>Created At: {complain.createdAt}</Text>
        <Text style={styles.description}>Ward No. {complain.wardNo}</Text>
        <Text style={styles.description}>Category: {complain.category}</Text>
      </View>
    </View>
  );
};

export default ViewComplainDetail;

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
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
});
