import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

const  CarouselReal = () => {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            delay={2000}
            indicatorAtBottom={false}
            indicatorSize={20}
            indicatorText="✽"
            indicatorColor="red"
          >
            <View style={styles.contentContainer}>
              <Text>Page 1</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text>Page 2</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text>Page 3</Text>
            </View>
          </Carousel>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselReal;