import React from 'react';
import { Button, TouchableOpacity, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { useComplainsQuery } from '../src/generated/graphql';
import { Image, CloudinaryImage } from 'react-native-cloudinary';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { data, loading, fetchMore, variables } = useComplainsQuery({
    variables: {
      limit: 15,
      cursor: null,
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
  return (
    <View>
      <FlatList
        data={data.complains.complains}
        renderItem={({ item }) => {
          const id = item.id;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewComplainDetails', { id })}
            >
              <Card complain={item} />
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Create Complain"
        onPress={() => {
          navigation.navigate('CreateComplain');
        }}
      />
    </View>
  );
};

export default HomeScreen;
