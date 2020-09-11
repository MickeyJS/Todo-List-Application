import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput } from 'react-native';
import TodoItem from "./components/todoItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosItems: [],
      todoItem: ''
    };
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
  }
    addTodoItem () {
        if(this.state.todoItem){
            this.setState(
                { todosItems: [...this.state.todosItems, this.state.todoItem],
                    todoItem: ''
                })
        }

  }
    deleteTodoItem(key){
        this.state.todosItems.splice(key, 1);
        this.setState({todosItems: this.state.todosItems});
  }
  render() {
    let todoItems = this.state.todosItems.map((todoItem, key ) => {
      return <TodoItem key={key} keyVal={key} todoItem={todoItem}
                       deleteTodoItem={() => this.deleteTodoItem(key)}/>
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ToDo List Application</Text>
            </View>
            <View style={styles.adder}>
                <TextInput
                    placeholder="Enter Value Here"
                    onChangeText={data => this.setState({ todoItem: data })}
                    value={this.state.todoItem}
                    style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                    multiline={false}
                    clearButtonMode="always"
                />
                <TouchableOpacity onPress={this.addTodoItem} activeOpacity={0.7} style={styles.button} >
                    <Text style={styles.buttonText}> Add Item to List</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.todosList}>{todoItems}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    adder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth:3,
        borderBottomColor: '#ededed'
    },
    button: {
        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#6A1B9A',
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10

    },
    textInputStyle: {
        textAlign: 'center',
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: '#6A1B9A',
        borderRadius: 7,
        marginTop: 12
    },
    buttonText: {
        color: '#efefef',
        textAlign: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent:'center',
        width: '100%' ,
        paddingVertical: 8,
        backgroundColor: '#4A148C',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
        padding: 26
    },
    todosList: {
        width: '100%',
        margin: 'auto'
    }
});
