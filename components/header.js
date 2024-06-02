import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.headersectionContainer}>
            <View style={styles.headersectionHeaderContainer}>
                <View style={styles.headersectionTitleContainer}>
                    <Text style={styles.headersectionTitle}>Hello, Devs!</Text>
                </View>
                <Text style={styles.headersectionDescription}>14 tasks today</Text>
            </View>
            <View style={[styles.headersectionImageContainer, {borderRadius: 50}]}>
                <Image source={require('../assets/person.png')} style={styles.headersectionImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headersectionTitleContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      headersectionContainer: {
        marginTop: 0,
        padding: 20,
        paddingHorizontal: 24,

        backgroundColor: '#FBF9F7',
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headersectionHeaderContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 150,
      },
      headersectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        flex: 1,
        textAlign: 'left',
      },
      headersectionDescription: {
        marginTop: 0,
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'left',
      },
      headersectionImage: {
          width: 50,
          height: 50,
          alignItems: 'center',
          
          textAlign: 'right',
        },
        headersectionImageContainer: {
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor:'white',
          // overflow: 'hidden',
          marginLeft: 24,
          width: 50,
          height: 50,
          alignItems: 'center',
          
          textAlign: 'right',
        },
});

export default Header;
