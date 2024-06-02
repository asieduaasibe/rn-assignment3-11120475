import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const Item = ({title, tasks, image}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tasks}>{tasks} Tasks</Text>
        <View style={styles.imageView}>
            <Image style={styles.image} source={image} />
        </View>
    </View>
);

export const Categories = ({ data }) => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({item}) => <Item title={item.title} tasks={item.tasks} image={item.image} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
        paddingTop: 5,
        // backgroundColor: '#FBF9F7',
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        width: 180,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 25,
    },
    title: {
        fontType: 'latto',
        fontWeight: 'bold',
        fontSize: 16,
        alignItems: 'left',
    },
    tasks: {
        fontType: 'latto',
        fontSize: 12,
        alignContent: 'left',
    },
    image: {
        
        width: "100%",
        height: '100%',
        objectFit: 'contain',
    },
    imageView: {
        width: 151,
        height: 132,
        borderRadius: 10,
        marginVertical: 10,
    },
});