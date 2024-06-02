import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { SearchBar } from './components/searchBar.js';
import { Categories } from './components/categories.js';
import { Header } from './components/header.js';
import { Tasks } from './components/Tasks.js';

export default function App() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked] = useState(false);
  const taskArray = [
    {
    id: 1,
    title: 'Mobile development',
  },
  {
    id: 2,
    title: 'Web development',
  },
  {
    id: 3,
    title: 'Havesting',
  },
  {
    id: 4,
    title: 'Music',
  },
  {
    id: 5,
      title: 'Nap',
  },
  {
    id: 6,
    title: 'Aerobics',
  },
  {
    id: 7,
    title: 'Clean Up',
  },
  {
    id: 8,
    title: 'Pray',
  },
  {
    id: 9,
    title: 'Visit',
  },
  {
    id: 10,
    title: 'Research',
  },
  {
    id: 11,
    title: 'Play',
  },
  {
    id: 12,
    title: 'Sing',
  },
  {
    id: 13,
    title: 'Dance',
  },
  {
    id: 14,
    title: 'Updates',
  },
  {
    id: 15,
    title: 'Assignment',
  }
  ];
  const categoriesArray = [
    {
      id: 1,
      title: 'Exercise',
      tasks: '14',
      image: require('./assets/exercise.png'),
    },
    {
      id: 2,
      title: 'Study',
      tasks: '14',
      image: require('./assets/study.png'),
    },
    {
      id: 3,
      title: 'Eating',
      image: "require('./assets/exercise.png')",
      tasks: '14',
    },
    {
      id: 4,
      title: 'Drinking water',
      image: "require('./assets/exercise.png')",
      tasks: '14',
    },
    {
      id: 5,
      title: 'Sleeping',
      image: "",
      tasks: '14',
    },
    {
      id: 6,
      title: 'Cooking',
      image: "require('./assets/exercise.png')",
      tasks: '14',
    },
    {
      id: 7,
      title: 'Coding',
      image: "require('./assets/study.png')",
      tasks: '14',
    },
    {
      id: 8,
      title: 'Rehearsing',
      image: "require('./assets/exercise.png')",
      tasks: '14',
    },
    {
      id: 9,
      title: 'Interacting',
      image: "require('./assets/study.png')",
      tasks: '14',
    }
  ];
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#FBF9F7'}}>
    <StatusBar style="{{backroundColor: 'white'}}" />
      <View style={styles.container}>
        <Header />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
        />
        <TouchableOpacity>
          <Image source={require('./assets/Filter.png')} style={styles.searchFilter} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.categoriesView}>
          <Categories data={categoriesArray} />
        </View>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Ongoing Tasks</Text>
        <View style={styles.tasksView}>
          <Tasks data={taskArray} />
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  titleView: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop:10,
    padding:10,
    marginLeft: 20
  },
  categoriesView: {
    marginTop: 0,
  },
  tasksView: {
    paddingBottom:50
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF9F7',
    width: "95%",
    alignItems: 'center',
  },
  searchFilter:{
    width: 50,
    height: 48,
  },
  container: {
    margin: 10,
    marginBottom: 10,
    paddingTop: 70,
    paddingBottom:20,
    backgroundColor: '#FBF9F7',
    width: '100%',
  },
});