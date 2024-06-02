import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export const Tasks = ({data}) => {
    return (
        // <ScrollView>

        //     <FlatList
        //         showsVerticalScrollIndicator={false}
        //         data={data}
        //         renderItem={({item}) => <Item title={item.title} />}
        //         keyExtractor={item => item.id}
        //         onEndReached={this._handleLoadMore}
        //         onEndReachedThreshold={0.5}
        //     />
        // </ScrollView>
        <ScrollView>
            {data.map((item, index) => (
                <View key={index}>
                <Item title={item.title} />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'left',
        
        marginHorizontal: 16,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E8D1BA',
        height: 128,
        width: 354,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        margin: 20
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
    }
});