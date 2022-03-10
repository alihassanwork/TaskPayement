import {StyleSheet} from 'react-native';
import React from 'react';
import {Container, Text} from '../../components';

const UploadFilesScreen = () => {
  return (
    <Container style={styles.container}>
      <Text isCenter>CategoriesScreen</Text>
    </Container>
  );
};

export default UploadFilesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
