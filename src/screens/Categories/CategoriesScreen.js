import {StyleSheet} from 'react-native';
import React from 'react';
import {Container, Text} from '../../components';
const CategoriesScreen = () => {
  return (
    <Container style={styles.container}>
      <Text>CategoriesScreen</Text>
    </Container>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
