import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';
//import { TextInput, Button } from 'react-native-gesture-handler';

export default class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      text: "This is our message on screen",
      todo: []
    }

  }

  addTodo = () => {
    this.setState({todo: this.state.text});
  }

  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <Text key={t}>{t}</Text>
      )
    })
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Hello world, this app is great!</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          title= "Add Todo"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: "green",
    borderWidth: 1
  }
});
