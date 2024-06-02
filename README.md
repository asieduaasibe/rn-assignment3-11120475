# Task Manager Application

This React Native application is a task manager that helps users organize their tasks into categories and view ongoing tasks. The application is designed to closely match a given UI mockup and includes the following core components.

## Components Overview

### 1. View
- **Usage**: Acts as a container for other components, defining the layout structure.
- **Example**:
  ```javascript
  <View style={styles.container}>
    {/* Other components go here */}
  </View>
  ```

### 2. Text
- **Usage**: Used to display text elements such as headers, category names, and task descriptions.
- **Example**:
  ```javascript
  <Text style={styles.header}>Task Manager</Text>
  ```

### 3. ScrollView
- **Usage**: Provides a scrollable container for the application content.
- **Example**:
  ```javascript
  <ScrollView style={styles.container}>
    {/* Scrollable content goes here */}
  </ScrollView>
  ```

### 4. TextInput
- **Usage**: Used for input fields such as the search bar.
- **Example**:
  ```javascript
  <TextInput style={styles.search} placeholder="Search tasks..." />
  ```

### 5. StyleSheet
- **Usage**: Defines styles for the components to ensure consistent and maintainable design.
- **Example**:
  ```javascript
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    // Other styles go here
  });
  ```

### 6. FlatList
- **Usage**: Efficiently renders a list of ongoing tasks.
- **Example**:
  ```javascript
  <FlatList
    data={tasks}
    renderItem={({ item }) => <Task task={item} />}
    keyExtractor={(item, index) => index.toString()}
    style={styles.tasks}
  />
  ```

### 7. Image
- **Usage**: Displays icons for each category.
- **Example**:
  ```javascript
  <Image source={require('./assets/exercise.png')} style={styles.categoryIcon} />
  ```

### 8. SearchBar
- **Usage**: A custom component for the search bar functionality.
- **Example**:

```javascript
        <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
        />
```

### 9. Header
- **Usage**: A custom component to display the application's header.
- **Example**:

```javascript
 <Header />
```

## Categories
The application includes the following categories with corresponding icons:
1. Exercise
2. Study
3. Code
4. Cook

Each category is displayed using the custom `Category` component, which includes an icon and a label. Each category consists of an `id`, an `image` and a task number called `task`

```javascript
<Category data={categoryData}>
```

## Tasks
The application displays a list of 15 ongoing tasks. These tasks are displayed using the custom `Task` component inside a `FlatList`. Each task in the Array consists of an `id` and a `title`.

```javascript
<Task data={taskData}>
```
### 10. TouchableOpacity
**Usage**: A wrapper component that captures touch events and can be used to create buttons or any clickable element. It provides feedback by reducing the opacity of the wrapped view when the user presses it, indicating that the touch is recognized.

**Example**:

```javascript
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
```